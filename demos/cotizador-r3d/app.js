import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Tus credenciales reales de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCMaWgnJ5T7qsqQzKzu6lGP7ryhIeCso4A",
  authDomain: "creative-r3d-cotizador.firebaseapp.com",
  projectId: "creative-r3d-cotizador",
  storageBucket: "creative-r3d-cotizador.firebasestorage.app",
  messagingSenderId: "452206938433",
  appId: "1:452206938433:web:c0dbf668142413966679c0",
  measurementId: "G-8LH9W67CZ5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Estado de la App por defecto (si falla la nube usa respaldo local)
let filamentos = JSON.parse(localStorage.getItem("r3d_filamentos")) || [
  { id: "1", nombre: "PLA Genérico Negro", precio: 350, gramos: 1000 },
];

let insumosExtra = JSON.parse(localStorage.getItem("r3d_insumos")) || [
  { id: "1", nombre: "Imán Neodimio", costo: 2.5 },
];

let cotizaciones = JSON.parse(localStorage.getItem("r3d_cotizaciones")) || [];

// Variables fijas del negocio
let CONFIG_EQUIPO = JSON.parse(localStorage.getItem("r3d_config")) || {
  precioImpresora: 10000,
  vidaUtilHoras: 5000,
  watts: 300,
  costoKwh: 6.0,
  costoHoraPersona: 60.0,
  costoCreditoIa: 450 / 1000, // $450 por 1000 créditos
  porcentajeDesperdicio: 0.1, // 10% fijo
};

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  renderFilamentosSelect();
  renderInsumosCheckboxes();
  renderInventarioVisual();
  renderHistorial();
  setupListeners();
  sincronizarConNube();
  cargarInputsConfig();
  function cargarInputsConfig() {
    document.getElementById("cfg-precio-imp").value =
      CONFIG_EQUIPO.precioImpresora;
    document.getElementById("cfg-vida-util").value =
      CONFIG_EQUIPO.vidaUtilHoras;
    document.getElementById("cfg-watts").value = CONFIG_EQUIPO.watts;
    document.getElementById("cfg-kwh").value = CONFIG_EQUIPO.costoKwh;
    document.getElementById("cfg-mano-obra").value =
      CONFIG_EQUIPO.costoHoraPersona;
    document.getElementById("cfg-creditos").value =
      CONFIG_EQUIPO.costoCreditoIa * 1000;
  }
});

// Navegación limpia por pestañas
function initTabs() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".tab-content")
        .forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
}

function redondearCinco(valor) {
  return Math.ceil(valor / 5) * 5;
}

// Renderizado de selects y catálogos
function renderFilamentosSelect() {
  const select = document.getElementById("filamento-select");
  select.innerHTML = filamentos
    .map((f) => `<option value="${f.id}">${f.nombre} ($${f.precio})</option>`)
    .join("");
  calcularEnVivo();
}

function renderInsumosCheckboxes() {
  const container = document.getElementById("insumos-extra-list");
  container.innerHTML = insumosExtra
    .map(
      (i) => `
    <div class="insumo-row">
      <label class="insumo-label">
        <input type="checkbox" value="${i.id}" class="insumo-check" data-costo="${i.costo}">
        ${i.nombre} ($${i.costo} c/u)
      </label>
      <input type="number" value="1" min="1" class="insumo-cant" data-id="${i.id}">
    </div>
  `,
    )
    .join("");

  document.querySelectorAll(".insumo-check, .insumo-cant").forEach((el) => {
    el.addEventListener("input", calcularEnVivo);
    el.addEventListener("change", calcularEnVivo);
  });
}

// Motor de Cálculo en tiempo real actualizado con costos unitarios
function calcularEnVivo() {
  const pesoSlicer =
    parseFloat(document.getElementById("peso-slicer").value) || 0;
  const piezasPlaca =
    parseInt(document.getElementById("piezas-placa").value) || 1;
  const horasImp = parseFloat(document.getElementById("horas-imp").value) || 0;
  const horasPersona =
    parseFloat(document.getElementById("horas-persona").value) || 0;
  const creditosIa =
    parseFloat(document.getElementById("creditos-ia").value) || 0;
  const filId = document.getElementById("filamento-select").value;

  const filamentoActivo =
    filamentos.find((f) => f.id === filId) || filamentos[0];

  // 1. Peso con 10% de desperdicio fijo
  const pesoConMerma = pesoSlicer * (1 + CONFIG_EQUIPO.porcentajeDesperdicio);
  const costoFilamento = filamentoActivo
    ? (pesoConMerma / filamentoActivo.gramos) * filamentoActivo.precio
    : 0;

  // 2. Costo de energía
  const costoEnergia =
    (CONFIG_EQUIPO.watts / 1000) * horasImp * CONFIG_EQUIPO.costoKwh;

  // 3. Desgaste de máquina
  const costoDesgaste =
    (CONFIG_EQUIPO.precioImpresora / CONFIG_EQUIPO.vidaUtilHoras) * horasImp;

  // 4. Créditos IA
  const costoCreditos = creditosIa * CONFIG_EQUIPO.costoCreditoIa;

  // 5. Insumos extra seleccionados (Ojo: los insumos extra se multiplican por su cantidad unitaria configurada)
  let costoInsumosExtra = 0;
  document.querySelectorAll(".insumo-check:checked").forEach((chk) => {
    const id = chk.value;
    const costoUnitario = parseFloat(chk.dataset.costo);
    const inputCant = document.querySelector(`.insumo-cant[data-id="${id}"]`);
    const cantidad = parseInt(inputCant ? inputCant.value : 1) || 1;
    costoInsumosExtra += costoUnitario * cantidad;
  });

  const costoBasePlaca =
    costoFilamento +
    costoEnergia +
    costoDesgaste +
    costoCreditos +
    costoInsumosExtra;
  const costoTotalPlaca =
    costoBasePlaca + horasPersona * CONFIG_EQUIPO.costoHoraPersona;

  // --- CÁLCULO UNITARIO (Por pieza individual) ---
  const costoBaseUnitario = costoBasePlaca / piezasPlaca;
  const costoTotalUnitario = costoTotalPlaca / piezasPlaca;

  // Factores de ganancia aplicados al costo UNITARIO (Amigos 2.5x, Público 3.0x, Detalle 3.5x)
  const sugAmigos = redondearCinco(costoTotalUnitario * 2.5);
  const sugPublico = redondearCinco(costoTotalUnitario * 3.0);
  const sugDetalle = redondearCinco(costoTotalUnitario * 3.5);

  // Pintar en pantalla los valores de la placa completa
  document.getElementById("res-base").innerText =
    `$${costoBasePlaca.toFixed(2)} MXN`;
  document.getElementById("res-total").innerText =
    `$${costoTotalPlaca.toFixed(2)} MXN`;

  // Pintar los costos unitarios
  document.getElementById("res-unitario-base").innerText =
    `$${costoBaseUnitario.toFixed(2)} MXN`;
  document.getElementById("res-unitario-total").innerText =
    `$${costoTotalUnitario.toFixed(2)} MXN`;

  // Pintar precios sugeridos por pieza individual
  document.getElementById("precio-amigos").innerText = `$${sugAmigos}`;
  document.getElementById("precio-publico").innerText = `$${sugPublico}`;
  document.getElementById("precio-detalle").innerText = `$${sugDetalle}`;

  return {
    costoBase: costoBasePlaca,
    costoTotal: costoTotalPlaca,
    costoTotalUnitario,
    piezasPlaca,
    sugAmigos,
    sugPublico,
    sugDetalle,
  };
}

function setupListeners() {
  [
    "peso-slicer",
    "piezas-placa",
    "horas-imp",
    "horas-persona",
    "creditos-ia",
    "filamento-select",
  ].forEach((id) => {
    document.getElementById(id).addEventListener("input", calcularEnVivo);
  });
  //Guardar Configuración
  document
    .getElementById("btn-guardar-config")
    .addEventListener("click", () => {
      CONFIG_EQUIPO = {
        precioImpresora:
          parseFloat(document.getElementById("cfg-precio-imp").value) || 0,
        vidaUtilHoras:
          parseFloat(document.getElementById("cfg-vida-util").value) || 1,
        watts: parseFloat(document.getElementById("cfg-watts").value) || 0,
        costoKwh: parseFloat(document.getElementById("cfg-kwh").value) || 0,
        costoHoraPersona:
          parseFloat(document.getElementById("cfg-mano-obra").value) || 0,
        costoCreditoIa:
          (parseFloat(document.getElementById("cfg-creditos").value) || 0) /
          1000,
        porcentajeDesperdicio: 0.1,
      };

      localStorage.setItem("r3d_config", JSON.stringify(CONFIG_EQUIPO));
      calcularEnVivo();
      alert("¡Configuración de equipo actualizada con éxito!");
    });
  // Guardar Cotización con filtros anti-brutos
  document
    .getElementById("btn-guardar-cotizacion")
    .addEventListener("click", async () => {
      const nombre = document.getElementById("pieza-nombre").value.trim();
      if (!nombre) {
        alert("Ponle un nombre a la pieza antes de guardarla.");
        return;
      }

      // Anti-brutos: Verificar duplicados exactos
      const existe = cotizaciones.some(
        (c) => c.nombre.toLowerCase() === nombre.toLowerCase(),
      );
      if (existe) {
        alert(
          "Ya existe una cotización con ese nombre. Elimina la anterior o cámbiale el nombre.",
        );
        return;
      }

      const calculo = calcularEnVivo();
      const nuevaCotizacion = {
        nombre,
        fecha: new Date().toLocaleDateString("es-MX", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        timestamp: Date.now(),
        filamentoUsado:
          document.getElementById("filamento-select").selectedOptions[0].text,
        ...calculo,
      };

      cotizaciones.push(nuevaCotizacion);
      localStorage.setItem("r3d_cotizaciones", JSON.stringify(cotizaciones));

      // Sincronizar a Firestore
      try {
        await addDoc(collection(db, "cotizaciones"), nuevaCotizacion);
      } catch (e) {
        console.log("Guardado localmente por falta de red");
      }

      alert("¡Cotización guardada con éxito!");
      document.getElementById("pieza-nombre").value = "";
      renderHistorial();
    });

  // Alta de Filamentos con validación anti-duplicados
  document
    .getElementById("btn-add-filamento")
    .addEventListener("click", async () => {
      const nombre = document.getElementById("fil-nombre").value.trim();
      const precio = parseFloat(document.getElementById("fil-precio").value);
      const gramos = parseFloat(document.getElementById("fil-gramos").value);

      if (!nombre) return alert("Ingresa un nombre de filamento");
      if (
        filamentos.some((f) => f.nombre.toLowerCase() === nombre.toLowerCase())
      ) {
        return alert("Ese filamento ya está registrado.");
      }

      const nuevo = { id: Date.now().toString(), nombre, precio, gramos };
      filamentos.push(nuevo);
      localStorage.setItem("r3d_filamentos", JSON.stringify(filamentos));
      renderFilamentosSelect();
      renderInventarioVisual();
      document.getElementById("fil-nombre").value = "";
      alert("Filamento registrado");
    });

  // Alta de Insumos con validación
  document.getElementById("btn-add-insumo").addEventListener("click", () => {
    const nombre = document.getElementById("ins-nombre").value.trim();
    const costo = parseFloat(document.getElementById("ins-costo").value);

    if (!nombre) return alert("Ingresa un nombre de insumo");
    if (
      insumosExtra.some((i) => i.nombre.toLowerCase() === nombre.toLowerCase())
    ) {
      return alert("Ese insumo ya existe.");
    }

    insumosExtra.push({ id: Date.now().toString(), nombre, costo });
    localStorage.setItem("r3d_insumos", JSON.stringify(insumosExtra));
    renderInsumosCheckboxes();
    renderInventarioVisual();
    document.getElementById("ins-nombre").value = "";
    alert("Insumo registrado");
  });

  document
    .getElementById("buscador-historial")
    .addEventListener("input", (e) => {
      renderHistorial(e.target.value);
    });
}

function renderInventarioVisual() {
  const container = document.getElementById("lista-inventario-visual");
  container.innerHTML = `
    <strong>Filamentos:</strong>
    <ul>${filamentos.map((f) => `<li>${f.nombre} - $${f.precio} (${f.gramos}g)</li>`).join("")}</ul>
    <strong style="margin-top:10px; display:block;">Insumos:</strong>
    <ul>${insumosExtra.map((i) => `<li>${i.nombre} - $${i.costo}</li>`).join("")}</ul>
  `;
}

function renderHistorial(filtro = "") {
  const container = document.getElementById("contenedor-historial");
  const filtradas = cotizaciones.filter((c) =>
    c.nombre.toLowerCase().includes(filtro.toLowerCase()),
  );

  if (filtradas.length === 0) {
    container.innerHTML =
      '<p style="color:#666; font-size:0.9rem;">No hay cotizaciones guardadas.</p>';
    return;
  }

  container.innerHTML = filtradas
    .map(
      (c, idx) => `
    <div class="card" style="border-left: 4px solid var(--primary-color);">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h3>${c.nombre}</h3>
        <span style="font-size:0.75rem; color:#666;">${c.fecha || "Reciente"}</span>
      </div>
      <p style="font-size:0.85rem; color:#555; margin:4px 0;">Filamento: ${c.filamentoUsado || "Estándar"} | Lote: ${c.piezasPlaca || 1} pza(s)</p>
      
      <div class="pricing-grid" style="margin:8px 0;">
        <div class="price-box"><span>Amigos (u.)</span><strong>$${c.sugAmigos}</strong></div>
        <div class="price-box featured"><span>Público (u.)</span><strong>$${c.sugPublico}</strong></div>
        <div class="price-box"><span>Detalle (u.)</span><strong>$${c.sugDetalle}</strong></div>
      </div>

      <button onclick="window.eliminarCotizacion(${idx})" class="btn-secondary" style="background:#d9534f; padding:6px; font-size:0.8rem;">Eliminar</button>
    </div>
  `,
    )
    .join("");
}

window.eliminarCotizacion = async function (idx) {
  if (confirm("¿Seguro que deseas eliminar esta cotización?")) {
    cotizaciones.splice(idx, 1);
    localStorage.setItem("r3d_cotizaciones", JSON.stringify(cotizaciones));
    renderHistorial();
  }
};

async function sincronizarConNube() {
  try {
    const querySnapshot = await getDocs(collection(db, "cotizaciones"));
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      if (!cotizaciones.some((c) => c.nombre === data.nombre)) {
        cotizaciones.push(data);
      }
    });
    localStorage.setItem("r3d_cotizaciones", JSON.stringify(cotizaciones));
    renderHistorial();
  } catch (e) {
    console.log("Modo offline activado");
  }
}
