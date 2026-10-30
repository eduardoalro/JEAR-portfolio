/**
 * Catálogo maestro extendido de llantas (Simula la base de datos de CONTPAQi)[cite: 2]
 */
const catalogoLlantas = [
  // Michelin
  {
    codigo: "LLAN-19565-MIC",
    marca: "Michelin",
    medida: "195/65R15",
    rin: 15,
    costo: 1100.0,
    precioLista: 1650.0,
    stockCentral: 88,
    stockNorte: 4,
  },
  {
    codigo: "LLAN-26570-MIC",
    marca: "Michelin",
    medida: "265/70R16",
    rin: 16,
    costo: 2800.0,
    precioLista: 3990.0,
    stockCentral: 37,
    stockNorte: 1,
  },
  {
    codigo: "LLAN-21560-MIC",
    marca: "Michelin",
    medida: "215/60R15",
    rin: 15,
    costo: 1250.0,
    precioLista: 1890.0,
    stockCentral: 105,
    stockNorte: 6,
  },
  {
    codigo: "LLAN-22550-MIC",
    marca: "Michelin",
    medida: "225/50R17",
    rin: 17,
    costo: 2400.0,
    precioLista: 3500.0,
    stockCentral: 12,
    stockNorte: 2,
  },
  {
    codigo: "LLAN-24545-MIC",
    marca: "Michelin",
    medida: "245/45R17",
    rin: 17,
    costo: 2600.0,
    precioLista: 3850.0,
    stockCentral: 40,
    stockNorte: 3,
  },

  // Bridgestone
  {
    codigo: "LLAN-20555-BRI",
    marca: "Bridgestone",
    medida: "205/55R16",
    rin: 16,
    costo: 1450.0,
    precioLista: 2150.0,
    stockCentral: 56,
    stockNorte: 6,
  },
  {
    codigo: "LLAN-19560-BRI",
    marca: "Bridgestone",
    medida: "195/60R15",
    rin: 15,
    costo: 1050.0,
    precioLista: 1580.0,
    stockCentral: 76,
    stockNorte: 5,
  },
  {
    codigo: "LLAN-21545-BRI",
    marca: "Bridgestone",
    medida: "215/45R17",
    rin: 17,
    costo: 1950.0,
    precioLista: 2850.0,
    stockCentral: 89,
    stockNorte: 3,
  },
  {
    codigo: "LLAN-18565-BRI",
    marca: "Bridgestone",
    medida: "185/65R14",
    rin: 14,
    costo: 820.0,
    precioLista: 1250.0,
    stockCentral: 47,
    stockNorte: 8,
  },
  {
    codigo: "LLAN-23560-BRI",
    marca: "Bridgestone",
    medida: "235/60R16",
    rin: 16,
    costo: 1850.0,
    precioLista: 2750.0,
    stockCentral: 85,
    stockNorte: 12,
  },

  // Pirelli
  {
    codigo: "LLAN-22545-PIR",
    marca: "Pirelli",
    medida: "225/45R17",
    rin: 17,
    costo: 2100.0,
    precioLista: 3100.0,
    stockCentral: 38,
    stockNorte: 2,
  },
  {
    codigo: "LLAN-19555-PIR",
    marca: "Pirelli",
    medida: "195/55R15",
    rin: 15,
    costo: 1150.0,
    precioLista: 1720.0,
    stockCentral: 64,
    stockNorte: 4,
  },
  {
    codigo: "LLAN-20560-PIR",
    marca: "Pirelli",
    medida: "205/60R15",
    rin: 15,
    costo: 1300.0,
    precioLista: 1950.0,
    stockCentral: 44,
    stockNorte: 3,
  },
  {
    codigo: "LLAN-21555-PIR",
    marca: "Pirelli",
    medida: "215/55R16",
    rin: 16,
    costo: 1600.0,
    precioLista: 2390.0,
    stockCentral: 91,
    stockNorte: 5,
  },

  // Goodyear
  {
    codigo: "LLAN-18560-GOO",
    marca: "Goodyear",
    medida: "185/60R14",
    rin: 14,
    costo: 850.0,
    precioLista: 1290.0,
    stockCentral: 110,
    stockNorte: 10,
  },
  {
    codigo: "LLAN-19565-GOO",
    marca: "Goodyear",
    medida: "195/65R15",
    rin: 15,
    costo: 980.0,
    precioLista: 1490.0,
    stockCentral: 112,
    stockNorte: 7,
  },
  {
    codigo: "LLAN-22560-GOO",
    marca: "Goodyear",
    medida: "225/60R16",
    rin: 16,
    costo: 1750.0,
    precioLista: 2590.0,
    stockCentral: 67,
    stockNorte: 2,
  },
  {
    codigo: "LLAN-17570-GOO",
    marca: "Goodyear",
    medida: "175/70R14",
    rin: 14,
    costo: 790.0,
    precioLista: 1190.0,
    stockCentral: 22,
    stockNorte: 12,
  },

  // Continental
  {
    codigo: "LLAN-20555-CON",
    marca: "Continental",
    medida: "205/55R16",
    rin: 16,
    costo: 1520.0,
    precioLista: 2290.0,
    stockCentral: 45,
    stockNorte: 5,
  },
  {
    codigo: "LLAN-22545-CON",
    marca: "Continental",
    medida: "225/45R18",
    rin: 18,
    costo: 2890.0,
    precioLista: 4200.0,
    stockCentral: 18,
    stockNorte: 0,
  },

  // Yokohama
  {
    codigo: "LLAN-19550-YOK",
    marca: "Yokohama",
    medida: "195/50R15",
    rin: 15,
    costo: 1180.0,
    precioLista: 1750.0,
    stockCentral: 30,
    stockNorte: 4,
  },
  {
    codigo: "LLAN-26565-YOK",
    marca: "Yokohama",
    medida: "265/65R17",
    rin: 17,
    costo: 3100.0,
    precioLista: 4500.0,
    stockCentral: 14,
    stockNorte: 1,
  },
];

/**
 * Cartera de clientes por vendedor con límites y saldos
 */
const baseDatosClientes = [
  {
    idCliente: "CLI-PUB",
    razonSocial: "Público General (Mostrador / Contado)",
    rfc: "XAXX010101000",
    numeroCliente: "00000",
    cpFiscal: "44100",
    correo: "ventasmostrador@dillago.com",
    creditoDisponble: 0.0,
  },
  {
    idCliente: "CLI-001",
    razonSocial: "Transportes y Logística del Pacífico S.A. de C.V.",
    rfc: "TLP120415AB3",
    numeroCliente: "10045",
    cpFiscal: "44100",
    correo: "facturacion@tlpacifico.com",
    creditoDisponble: 85000.0,
  },
  {
    idCliente: "CLI-002",
    razonSocial: "Distribuidora Automotriz Occidental S.R.L.",
    rfc: "DAO080920KX9",
    numeroCliente: "10088",
    cpFiscal: "44600",
    correo: "compras@daoccidental.mx",
    creditoDisponble: 30000.0,
  },
  {
    idCliente: "CLI-003",
    razonSocial: "Servicios Múltiples de Carga Guadalajarenses S.A.",
    rfc: "SMC1901103R2",
    numeroCliente: "10102",
    cpFiscal: "44900",
    correo: "contacto@smcga.com",
    creditoDisponble: 150000.0,
  },
  {
    idCliente: "CLI-004",
    razonSocial: "Refaccionaria y Llantas El Camino Real",
    rfc: "RCR950210EE4",
    numeroCliente: "10150",
    cpFiscal: "45050",
    correo: "ventas@elcaminoreal.mx",
    creditoDisponble: 45000.0,
  },
  {
    idCliente: "CLI-005",
    razonSocial: "Constructora e Infraestructura El Salto S.A.",
    rfc: "CIE1408088H1",
    numeroCliente: "10210",
    cpFiscal: "45680",
    correo: "pagos@infraestructurasalto.mx",
    creditoDisponble: 200000.0,
  },
  {
    idCliente: "CLI-006",
    razonSocial: "Taller Mecánico y Alineación Los Piñones",
    rfc: "TML1803227Q8",
    numeroCliente: "10315",
    cpFiscal: "44250",
    correo: "lospinones.taller@gmail.com",
    creditoDisponble: 15000.0,
  },
];

/**
 * Matriz de Usuarios y Roles del Sistema
 */
const usuariosSistema = [
  {
    id: 1,
    usuario: "yayo.admin",
    rol: "Administrador General",
    activo: true,
    esAdmin: true,
    permisos: [
      "inventario",
      "cotizador",
      "historial",
      "credito",
      "cobranza",
      "admin",
    ],
  },
  {
    id: 2,
    usuario: "vendedor.carlos",
    rol: "Vendedor Sucursal",
    activo: true,
    esAdmin: false,
    permisos: ["inventario", "cotizador", "historial"],
  },
  {
    id: 3,
    usuario: "credito.ana",
    rol: "Autorizador de Crédito",
    activo: true,
    esAdmin: false,
    permisos: ["inventario", "credito"],
  },
  {
    id: 4,
    usuario: "lectura.pedro",
    rol: "Consulta / Lectura",
    activo: true,
    esAdmin: false,
    permisos: ["inventario"],
  },
];

let usuarioActual = null;
let productoSeleccionadoActual = null;
let clienteSeleccionadoActual = null;
let carritoCotizacion = [];
let folioSecuencia = 1001;

// Historial de cotizaciones y apartados del vendedor
let historialCotizaciones = [];
// Bandeja de solicitudes pendientes para el módulo de crédito
let solicitudesCredito = [];
// Datos de cobranza (con soporte para exclusión manual)
let clientesCreditoVencido = [
  {
    id: 1,
    razonSocial: "Transportes y Logística del Norte S.A. de C.V.",
    email: "facturacion@transnorte.com",
    montoVencido: 45200.0,
    fechaVencimiento: "2026-08-15",
    diasVencido: 52,
    seleccionado: false,
    excluido: false,
    enviado: false,
  },
  {
    id: 2,
    razonSocial: "Servicios Automotrices Tlaquepaque S. de R.L.",
    email: "pagos@autotlaquepaque.mx",
    montoVencido: 18750.5,
    fechaVencimiento: "2026-09-01",
    diasVencido: 35,
    seleccionado: false,
    excluido: false,
    enviado: false,
  },
  {
    id: 3,
    razonSocial: "Grupo Industrial Continental de Jalisco",
    email: "compras@gicjalisco.com",
    montoVencido: 89600.0,
    fechaVencimiento: "2026-08-28",
    diasVencido: 39,
    seleccionado: false,
    excluido: false,
    enviado: false,
  },
  {
    id: 4,
    razonSocial: "Autobuses Urbanos del Occidente S.A. de C.V.",
    email: "tesoreria@urbanosoccidente.com.mx",
    montoVencido: 134200.0,
    fechaVencimiento: "2026-07-20",
    diasVencido: 78,
    seleccionado: false,
    excluido: false,
    enviado: false,
  },
  {
    id: 5,
    razonSocial: "Distribuidora de Neumáticos Zapopan S.A.",
    email: "cuentaporpagar@neumaticoszapopan.mx",
    montoVencido: 62800.75,
    fechaVencimiento: "2026-08-05",
    diasVencido: 62,
    seleccionado: false,
    excluido: false,
    enviado: false,
  },
  {
    id: 6,
    razonSocial: "Fletes y Maniobras del Bajío S.A. de C.V.",
    email: "cobranza@fletesbajio.com.mx",
    montoVencido: 112500.0,
    fechaVencimiento: "2026-07-31",
    diasVencido: 67,
    seleccionado: false,
    excluido: false,
    enviado: false,
  },
];

let filtrosInventarioActivos = { marca: "", rin: "", texto: "" };
const MARGEN_MINIMO_PORCENTAJE = 0.15;

function generarFolio() {
  return `COT-${folioSecuencia}`;
}

document.addEventListener("DOMContentLoaded", () => {
  configurarNavegacionVistas();
  configurarLogin();
});

/**
 * Controla el acceso basado en roles al cambiar de vistas y renderizar el menú principal
 */
function configurarNavegacionVistas() {
  document.querySelectorAll("[data-target]").forEach((boton) => {
    boton.addEventListener("click", () => {
      const destino = boton.getAttribute("data-target");
      if (destino !== "vistaLogin" && !usuarioActual) {
        alert("⚠️ Sesión no iniciada. Por favor autentícate.");
        cambiarVista("vistaLogin");
        return;
      }
      cambiarVista(destino);
      if (destino === "vistaDashboard") renderizarMenuDashboard();
      if (destino === "vistaVentas") inicializarFiltrosFacetados();
      if (destino === "vistaHistorialCotizaciones")
        renderizarHistorialCotizaciones();
      if (destino === "vistaCredito") renderizarModuloCredito();
      if (destino === "vistaCobranza") renderizarCobranza();
      if (destino === "vistaAdmin") renderizarAdminUsuarios();
    });
  });
}

function cambiarVista(idVista) {
  document
    .querySelectorAll(".view")
    .forEach((v) => v.classList.remove("view--active"));
  const destino = document.getElementById(idVista);
  if (destino) destino.classList.add("view--active");
  // Ocultar modales al cambiar de pantalla
  document
    .querySelectorAll(".modal")
    .forEach((m) => m.setAttribute("hidden", "true"));
}

function configurarLogin() {
  const form = document.getElementById("formLogin");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = document
      .getElementById("inputUsuario")
      .value.trim()
      .toLowerCase();
    const userFound = usuariosSistema.find(
      (u) => u.usuario.toLowerCase() === userInput,
    );
    const lblError = document.getElementById("lblLoginError");

    if (!userFound || !userFound.activo) {
      lblError.textContent = "Usuario inválido o inactivo.";
      return;
    }

    usuarioActual = userFound;
    lblError.textContent = "";
    renderizarMenuDashboard();
    cambiarVista("vistaDashboard");
  });

  document.getElementById("btnCerrarSesion").onclick = () => {
    usuarioActual = null;
    document.getElementById("inputUsuario").value = "";
    document.getElementById("inputPassword").value = "";
    cambiarVista("vistaLogin");
  };
}

/**
 * Renderiza dinámicamente el menú principal según los permisos del rol activo
 */
function renderizarMenuDashboard() {
  const contenedor = document.getElementById("contenedorMenuDashboard");
  if (!contenedor || !usuarioActual) return;

  document.getElementById("lblSaludoDashboard").textContent =
    `Menu principal      \u00A0\u00A0\u00A0\u00A0         Bienvenido: ${usuarioActual.usuario}`;
  contenedor.innerHTML = "";

  const tarjetasPermitidas = [
    {
      id: "inventario",
      target: "vistaVentas",
      icon: "🛞",
      title: "Inventario",
      desc: "Consulta existencias, filtros facetados y márgenes.",
    },
    {
      id: "cotizador",
      target: "vistaInventario",
      icon: "🛒",
      title: "Cotizador y Apartados",
      desc: "Genera cotizaciones y apartados con vigencia de 24h.",
    },
    {
      id: "historial",
      target: "vistaHistorialCotizaciones",
      icon: "📋",
      title: "Mis Cotizaciones",
      desc: "Historial de cotizaciones y estatus de apartados.",
    },
    {
      id: "credito",
      target: "vistaCredito",
      icon: "💳",
      title: "Aprobación de Crédito",
      desc: `Bandeja de ventas pendientes (${solicitudesCredito.filter((s) => s.estatus === "PENDIENTE").length})`,
    },
    {
      id: "cobranza",
      target: "vistaCobranza",
      icon: "💵",
      title: "Cobranza y mails",
      desc: "Gestión de créditos vencidos con exclusión manual.",
    },
    {
      id: "admin",
      target: "vistaAdmin",
      icon: "⚙️",
      title: "Gestión de Usuarios",
      desc: "Matriz de niveles de acceso corporativo.",
    },
  ];

  tarjetasPermitidas.forEach((card) => {
    if (usuarioActual.esAdmin || usuarioActual.permisos.includes(card.id)) {
      const btn = document.createElement("button");
      btn.className = "menu-card";
      btn.setAttribute("data-target", card.target);
      btn.innerHTML = `
        <span class="menu-card__icon">${card.icon}</span>
        <h2 class="menu-card__title">${card.title}</h2>
        <p class="menu-card__desc">${card.desc}</p>
      `;
      btn.onclick = () => {
        cambiarVista(card.target);
        if (card.target === "vistaVentas") {
          renderizarVentas(catalogoLlantas);
          inicializarFiltrosFacetados();
        }
        if (card.target === "vistaInventario") renderizarCotizacion();
        if (card.target === "vistaHistorialCotizaciones")
          renderizarHistorialCotizaciones();
        if (card.target === "vistaCredito") renderizarModuloCredito();
        if (card.target === "vistaCobranza") renderizarCobranza();
        if (card.target === "vistaAdmin") renderizarAdminUsuarios();
      };
      contenedor.appendChild(btn);
    }
  });
}

/**
 * Inicializa y renderiza los filtros facetados (marcas y rines)
 */
function inicializarFiltrosFacetados() {
  const contMarcas = document.getElementById("contenedorFiltrosMarcas");
  const contRines = document.getElementById("contenedorFiltrosRines");
  if (!contMarcas || !contRines) return;

  const marcasUnicas = [...new Set(catalogoLlantas.map((l) => l.marca))];
  const rinesUnicos = [...new Set(catalogoLlantas.map((l) => l.rin))];

  contMarcas.innerHTML =
    `<button class="btn-facet ${filtrosInventarioActivos.marca === "" ? "active" : ""}" onclick="filtrarPorMarca('')">Todas las Marcas</button>` +
    marcasUnicas
      .map(
        (m) =>
          `<button class="btn-facet ${filtrosInventarioActivos.marca === m ? "active" : ""}" onclick="filtrarPorMarca('${m}')">${m}</button>`,
      )
      .join("");

  contRines.innerHTML =
    `<button class="btn-facet ${filtrosInventarioActivos.rin === "" ? "active" : ""}" onclick="filtrarPorRin('')">Todos los Rines</button>` +
    rinesUnicos
      .map(
        (r) =>
          `<button class="btn-facet ${filtrosInventarioActivos.rin === r ? "active" : ""}" onclick="filtrarPorRin(${r})">Rin ${r}</button>`,
      )
      .join("");

  aplicarFiltrosInventario();

  const inputBusq = document.getElementById("inputBusquedaVenta");
  if (inputBusq) {
    inputBusq.oninput = (e) => {
      filtrosInventarioActivos.texto = e.target.value.toLowerCase();
      aplicarFiltrosInventario();
    };
  }
}

function filtrarPorMarca(marca) {
  filtrosInventarioActivos.marca = marca;
  inicializarFiltrosFacetados();
}
function filtrarPorRin(rin) {
  filtrosInventarioActivos.rin = rin === "" ? "" : Number(rin);
  inicializarFiltrosFacetados();
}

function aplicarFiltrosInventario() {
  const filtrados = catalogoLlantas.filter((l) => {
    const coincideMarca =
      filtrosInventarioActivos.marca === "" ||
      l.marca === filtrosInventarioActivos.marca;
    const coincideRin =
      filtrosInventarioActivos.rin === "" ||
      l.rin === filtrosInventarioActivos.rin;
    const coincideTexto =
      l.medida.toLowerCase().includes(filtrosInventarioActivos.texto) ||
      l.marca.toLowerCase().includes(filtrosInventarioActivos.texto) ||
      l.codigo.toLowerCase().includes(filtrosInventarioActivos.texto);
    return coincideMarca && coincideRin && coincideTexto;
  });
  renderizarVentas(filtrados);
}

function renderizarVentas(lista) {
  const contenedor = document.getElementById("contenedorVentas");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = `<p style="text-align:center; color:#64748b; padding:2rem;">No hay neumáticos que coincidan con el filtro.</p>`;
    return;
  }

  const esSoloLectura =
    usuarioActual &&
    usuarioActual.permisos.length === 1 &&
    usuarioActual.permisos[0] === "lectura";

  lista.forEach((llanta) => {
    const stockTotal = llanta.stockCentral + llanta.stockNorte;
    const tarjeta = document.createElement("article");
    tarjeta.className = "item-card";
    tarjeta.innerHTML = `
      <div class="item-card__header">
        <span class="item-card__tag">${llanta.marca} - ${llanta.medida}</span>
        <span style="font-size:0.8rem; color:${stockTotal > 0 ? "#16a34a" : "#dc2626"}; font-weight:700;">${stockTotal > 0 ? "Stock OK" : "Agotado"}</span>
      </div>
      <h3 class="item-card__title">Rin ${llanta.rin} (${llanta.codigo})</h3>
      <div class="item-card__details">
        <span>Central: <strong>${llanta.stockCentral}</strong></span>
        <span>Norte: <strong>${llanta.stockNorte}</strong></span>
      </div>
      <div class="item-card__footer">
        ${esSoloLectura ? '<span style="font-size:0.8rem; color:#64748b;">Modo Consulta</span>' : `<button class="item-card__btn" onclick="abrirModalCotizacion('${llanta.codigo}')">Cotizar / Apartar</button>`}
      </div>
    `;
    contenedor.appendChild(tarjeta);
  });
}

function abrirModalCotizacion(codigo) {
  const llanta = catalogoLlantas.find((l) => l.codigo === codigo);
  if (!llanta) return;
  productoSeleccionadoActual = llanta;
  const stockTotal = llanta.stockCentral + llanta.stockNorte;

  document.getElementById("modalNombreLlanta").textContent =
    `${llanta.marca} ${llanta.medida}`;
  document.getElementById("modalCosto").textContent =
    `$${llanta.costo.toFixed(2)}`;
  const minU = llanta.costo * (1 + MARGEN_MINIMO_PORCENTAJE);
  document.getElementById("modalPrecioMinimo").textContent =
    `$${minU.toFixed(2)} c/u`;
  document.getElementById("inputPrecioVenta").value = llanta.precioLista;

  let contenedorFeedback = document.getElementById("modalFeedback");
  let grupoCantidad = document.getElementById("grupoCantidadModal");

  if (!grupoCantidad) {
    grupoCantidad = document.createElement("div");
    grupoCantidad.id = "grupoCantidadModal";
    grupoCantidad.className = "modal__form-group";
    grupoCantidad.style.marginBottom = "0.75rem";
    grupoCantidad.innerHTML = `
      <label for="inputCantidadVenta" class="modal__label">Cantidad a Cotizar/Apartar (Máx: <span id="lblStockMax">${stockTotal}</span>):</label>
      <input type="number" id="inputCantidadVenta" class="modal__input" value="1" min="1" max="${stockTotal}">
    `;
    contenedorFeedback.parentNode.insertBefore(
      grupoCantidad,
      contenedorFeedback,
    );
  } else {
    document.getElementById("lblStockMax").textContent = stockTotal;
    const inputC = document.getElementById("inputCantidadVenta");
    if (inputC) {
      inputC.max = stockTotal;
      inputC.value = 1;
    }
  }

  const inputCantAktual = document.getElementById("inputCantidadVenta");
  if (inputCantAktual) {
    inputCantAktual.oninput = validarCotizacion;
  }
  document.getElementById("inputPrecioVenta").oninput = validarCotizacion;

  validarCotizacion();
  document.getElementById("modalVenta").removeAttribute("hidden");

  const btn = document.getElementById("btnAccionApartar");
  btn.onclick = () => {
    const inputC = document.getElementById("inputCantidadVenta");
    const cantidad = parseInt(inputC ? inputC.value : 1, 10) || 1;

    if (cantidad > stockTotal) {
      alert("⚠️ Stock insuficiente para la cantidad solicitada.");
      return;
    }
    const pVenta =
      parseFloat(document.getElementById("inputPrecioVenta").value) ||
      llanta.precioLista;

    // --- DESCUENTO REAL DE STOCK EN EL CATÁLOGO ---
    let restantes = cantidad;
    let descontadoCentral = 0;
    let descontadoNorte = 0;

    if (llanta.stockCentral > 0) {
      descontadoCentral = Math.min(llanta.stockCentral, restantes);
      llanta.stockCentral -= descontadoCentral;
      restantes -= descontadoCentral;
    }
    if (restantes > 0 && llanta.stockNorte > 0) {
      descontadoNorte = Math.min(llanta.stockNorte, restantes);
      llanta.stockNorte -= descontadoNorte;
      restantes -= descontadoNorte;
    }

    // Guardar en el carrito borrador (Sin duplicar entradas en el historial todavía)
    const itemExistente = carritoCotizacion.find(
      (item) => item.codigo === llanta.codigo,
    );

    if (itemExistente) {
      itemExistente.cantidad += cantidad;
      itemExistente.precioUnitario = pVenta;
      itemExistente.subtotal = itemExistente.cantidad * pVenta;
      itemExistente.apartadoCentral =
        (itemExistente.apartadoCentral || 0) + descontadoCentral;
      itemExistente.apartadoNorte =
        (itemExistente.apartadoNorte || 0) + descontadoNorte;
    } else {
      carritoCotizacion.push({
        ...llanta,
        cantidad: cantidad,
        precioUnitario: pVenta,
        subtotal: pVenta * cantidad,
        apartadoCentral: descontadoCentral,
        apartadoNorte: descontadoNorte,
      });
    }

    alert(
      `🛒 ${cantidad} pza(s) de ${llanta.marca} agregadas al cotizador. Ve al módulo "Cotizador y Apartados" para finalizar la cotización o venta.`,
    );
    document.getElementById("modalVenta").setAttribute("hidden", "true");

    if (typeof aplicarFiltrosInventario === "function") {
      aplicarFiltrosInventario();
    }
  };

  document.getElementById("btnCerrarModal").onclick = () =>
    document.getElementById("modalVenta").setAttribute("hidden", "true");
}

function validarCotizacion() {
  if (!productoSeleccionadoActual) return;
  const inputPrecio = document.getElementById("inputPrecioVenta");
  const inputCantidad = document.getElementById("inputCantidadVenta");
  const btn = document.getElementById("btnAccionApartar");
  const feedback = document.getElementById("modalFeedback");

  const stockTotal =
    productoSeleccionadoActual.stockCentral +
    productoSeleccionadoActual.stockNorte;
  let cantidad = parseInt(inputCantidad ? inputCantidad.value : 1) || 1;
  if (cantidad < 1) cantidad = 1;
  if (cantidad > stockTotal) cantidad = stockTotal;

  const precioUnitario = parseFloat(inputPrecio.value) || 0;
  const precioMinimoUnitario =
    productoSeleccionadoActual.costo * (1 + MARGEN_MINIMO_PORCENTAJE);
  const precioMinimoTotal = precioMinimoUnitario * cantidad;
  const precioTotalPropuesto = precioUnitario * cantidad;

  if (precioUnitario < precioMinimoUnitario) {
    feedback.textContent = `⚠️ Margen bajo el límite. Mínimo total para ${cantidad} pza(s): $${precioMinimoTotal.toFixed(2)}`;
    feedback.className = "modal__feedback modal__feedback--error";
    btn.setAttribute("disabled", "true");
  } else {
    const ganancia =
      precioTotalPropuesto - productoSeleccionadoActual.costo * cantidad;
    const porcentaje = ((ganancia / precioTotalPropuesto) * 100).toFixed(1);
    feedback.textContent = `✅ Margen válido (${porcentaje}% de ganancia). Venta total: $${precioTotalPropuesto.toFixed(2)}`;
    feedback.className = "modal__feedback modal__feedback--success";
    btn.removeAttribute("disabled");
  }
}

function renderizarCotizacion() {
  const btnAbrirCliente = document.getElementById("btnAbrirModalNuevoCliente");
  const modalCliente = document.getElementById("modalNuevoCliente");
  const btnCerrarCliente = document.getElementById("btnCerrarModalCliente");
  const formNuevoCliente = document.getElementById("formNuevoCliente");
  const tbody = document.getElementById("contenedorCotizacionBody");
  const selectCliente = document.getElementById("selectClienteCotizacion");

  if (btnAbrirCliente) {
    btnAbrirCliente.onclick = () => {
      if (modalCliente) modalCliente.removeAttribute("hidden");
    };
  }

  if (btnCerrarCliente) {
    btnCerrarCliente.onclick = () => {
      if (modalCliente) modalCliente.setAttribute("hidden", "true");
    };
  }

  // Listener para procesar la alta del cliente
  if (formNuevoCliente && !formNuevoCliente.dataset.escuchando) {
    formNuevoCliente.dataset.escuchando = "true";
    formNuevoCliente.onsubmit = (e) => {
      e.preventDefault();

      const razonSocial = document
        .getElementById("txtNuevaRazonSocial")
        .value.trim();
      const rfc = document
        .getElementById("txtNuevoRfc")
        .value.trim()
        .toUpperCase();
      const cp = document.getElementById("txtNuevoCp").value.trim();
      const correo = document.getElementById("txtNuevoCorreo").value.trim();
      const credito =
        parseFloat(document.getElementById("numNuevoCredito").value) || 0;

      // Generar ID único incremental
      const nuevoId = `CLI-00${baseDatosClientes.length + 1}`;

      const nuevoClienteObj = {
        idCliente: nuevoId,
        razonSocial: razonSocial,
        rfc: rfc,
        numeroCliente: `${10000 + baseDatosClientes.length}`,
        cpFiscal: cp,
        correo: correo,
        creditoDisponble: credito,
      };

      // Inyectar en la base de datos local
      baseDatosClientes.push(nuevoClienteObj);

      // Auto-seleccionar al nuevo cliente en el cotizador
      clienteSeleccionadoActual = nuevoClienteObj;

      alert(
        `✅ Cliente "${razonSocial}" dado de alta con éxito en tu cartera.`,
      );

      // Limpiar formulario y cerrar modal
      formNuevoCliente.reset();
      if (modalCliente) modalCliente.setAttribute("hidden", "true");

      // Re-renderizar el cotizador para reflejar al nuevo cliente seleccionado
      renderizarCotizacion();

      // Forzar que el select elija al recién creado
      const selectCli = document.getElementById("selectClienteCotizacion");
      if (selectCli) {
        selectCli.value = nuevoId;
        document.getElementById("lblRfc").textContent = nuevoClienteObj.rfc;
        document.getElementById("lblCreditoDisp").textContent =
          `$${nuevoClienteObj.creditoDisponble.toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
      }
    };
  }

  if (!tbody || !selectCliente) return;

  document.getElementById("lblFolioCotizacion").textContent =
    `COT-${folioSecuencia}`;
  document.getElementById("lblFechaCotizacion").textContent =
    new Date().toLocaleDateString("es-MX");

  selectCliente.innerHTML =
    `<option value="">-- Seleccionar de mi Cartera --</option>` +
    baseDatosClientes
      .map((c) => `<option value="${c.idCliente}">${c.razonSocial}</option>`)
      .join("");

  selectCliente.onchange = (e) => {
    clienteSeleccionadoActual =
      baseDatosClientes.find((c) => c.idCliente === e.target.value) || null;
    document.getElementById("lblRfc").textContent = clienteSeleccionadoActual
      ? clienteSeleccionadoActual.rfc
      : "--";
    document.getElementById("lblCreditoDisp").textContent =
      clienteSeleccionadoActual
        ? `$${clienteSeleccionadoActual.creditoDisponble.toLocaleString()}`
        : "$0.00";
  };

  tbody.innerHTML = "";
  let total = 0;
  carritoCotizacion.forEach((item, idx) => {
    total += item.subtotal;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.codigo}</td><td>${item.marca}</td><td>${item.medida}</td><td>${item.cantidad}</td>
      <td>$${item.precioUnitario.toFixed(2)}</td><td>$${item.subtotal.toFixed(2)}</td>
      <td><button onclick="eliminarItemCotizacion(${idx})" style="background:#dc2626; color:#fff; border:none; padding:0.2rem 0.5rem; border-radius:4px; cursor:pointer;">✕</button></td>
    `;
    tbody.appendChild(tr);
  });
  document.getElementById("lblTotalCotizacion").textContent =
    `$${total.toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;

  // Botón Apartar (24 horas)
  document.getElementById("btnApartarProducto").onclick = () => {
    if (carritoCotizacion.length === 0) {
      alert(
        "⚠️ El cotizador está vacío. Agrega productos desde el inventario.",
      );
      return;
    }
    const folioApartado = `APT-${folioSecuencia}`;

    historialCotizaciones.push({
      folio: folioApartado,
      fecha: new Date().toLocaleString(),
      cliente: clienteSeleccionadoActual
        ? clienteSeleccionadoActual.razonSocial
        : "Público General",
      total: total,
      estatus: "APARTADO_24H",
      expira: new Date(Date.now() + 86400000).toLocaleString(),
      items: [...carritoCotizacion],
    });

    alert(
      `⏳ Apartado registrado con éxito con el folio ${folioApartado}. Vigencia: 24 horas. El stock se mantiene reservado.`,
    );
    folioSecuencia++;
    carritoCotizacion = [];
    renderizarCotizacion();
  };

  // Botón Finalizar Venta / Crédito
  // Botón Finalizar Venta / Crédito o Contado
  document.getElementById("btnFinalizarCompra").onclick = () => {
    if (carritoCotizacion.length === 0) {
      alert(
        "⚠️ El cotizador está vacío. Agrega productos desde el inventario.",
      );
      return;
    }
    if (!clienteSeleccionadoActual) {
      alert(
        "⚠️ Por favor selecciona un cliente o Público General de la cartera.",
      );
      return;
    }

    const esPublicoGeneral = clienteSeleccionadoActual.idCliente === "CLI-PUB";
    const tipoFolio = esPublicoGeneral ? "VNT" : "PED";
    const folioVenta = `${tipoFolio}-${folioSecuencia}`;

    const nuevaVenta = {
      folio: folioVenta,
      fecha: new Date().toLocaleString(),
      vendedor: usuarioActual ? usuarioActual.usuario : "vendedor.carlos",
      cliente: clienteSeleccionadoActual.razonSocial,
      total: total,
      estatus: esPublicoGeneral ? "VENTA_CONTADO_COMPAQ" : "PENDIENTE_CREDITO",
      items: [...carritoCotizacion],
    };

    // 1. Registrar en el historial del vendedor
    historialCotizaciones.push(nuevaVenta);

    // 2. Si NO es público general, mandarlo a la bandeja de crédito
    if (!esPublicoGeneral) {
      solicitudesCredito.push(nuevaVenta);
      alert(
        `🚀 Pedido de crédito ${folioVenta} registrado y enviado al módulo de Autorización Financiera.`,
      );
    } else {
      alert(
        `✅ ¡Venta de mostrador ${folioVenta} registrada con éxito! Sincronizada directamente con CONTPAQi.`,
      );
    }

    folioSecuencia++;
    carritoCotizacion = [];
    renderizarCotizacion();
  };

  // Vaciar Cotización
  document.getElementById("btnVaciarCotizacion").onclick = () => {
    if (carritoCotizacion.length === 0) return;
    if (
      confirm(
        "¿Deseas vaciar la cotización y devolver las piezas al inventario?",
      )
    ) {
      vaciarCarritoYDevolverStock();
    }
  };
}

// Función para eliminar un solo ítem y reponer sus piezas al catálogo
function eliminarItemCotizacion(index) {
  const item = carritoCotizacion[index];
  if (!item) return;

  const llanta = catalogoLlantas.find((l) => l.codigo === item.codigo);
  if (llanta) {
    llanta.stockCentral += item.apartadoCentral || 0;
    llanta.stockNorte += item.apartadoNorte || 0;
  }

  carritoCotizacion.splice(index, 1);
  renderizarCotizacion();
  if (typeof aplicarFiltrosInventario === "function")
    aplicarFiltrosInventario();
}

// Función para vaciar todo el carrito y devolver todo el stock
function vaciarCarritoYDevolverStock() {
  carritoCotizacion.forEach((item) => {
    const llanta = catalogoLlantas.find((l) => l.codigo === item.codigo);
    if (llanta) {
      llanta.stockCentral += item.apartadoCentral || 0;
      llanta.stockNorte += item.apartadoNorte || 0;
    }
  });

  carritoCotizacion = [];
  renderizarCotizacion();
  if (typeof aplicarFiltrosInventario === "function")
    aplicarFiltrosInventario();
}

/**
 * Renderiza el historial de cotizaciones del vendedor reflejando
 * el estatus en vivo (Apartado, Pendiente de Crédito, Autorizado o Rechazado).
 */
function renderizarHistorialCotizaciones() {
  const cont = document.getElementById("contenedorHistorialCotizaciones");
  if (!cont) return;
  cont.innerHTML = "";

  if (historialCotizaciones.length === 0) {
    cont.innerHTML = `<p style="text-align:center; color:#64748b; padding:2rem;">No hay cotizaciones ni pedidos recientes registrados.</p>`;
    return;
  }

  // Sincronizar estatus actualizados desde el módulo de crédito
  historialCotizaciones.forEach((h) => {
    const solicitudGlobal = solicitudesCredito.find((s) => s.folio === h.folio);
    if (solicitudGlobal) {
      h.estatus = solicitudGlobal.estatus;
    }
  });

  historialCotizaciones
    .slice(-10)
    .reverse()
    .forEach((h, idxReal) => {
      const indexOriginal = historialCotizaciones.length - 1 - idxReal;
      const card = document.createElement("article");
      card.className = "item-card";

      let colorEstatus = "#2563eb";
      let textoEstatusVisual = h.estatus;

      if (h.estatus === "APARTADO_24H") {
        colorEstatus = "#d97706";
        textoEstatusVisual = "APARTADO VIGENTE (24H)";
      } else if (
        h.estatus === "PENDIENTE" ||
        h.estatus === "PENDIENTE_CREDITO"
      ) {
        colorEstatus = "#ca8a04";
        textoEstatusVisual = "PENDIENTE DE APROBACIÓN EN CRÉDITO";
      } else if (
        h.estatus === "AUTORIZADO_COMPAQ" ||
        h.estatus === "VENTA_CONTADO_COMPAQ"
      ) {
        colorEstatus = "#16a34a"; // Verde éxito
        textoEstatusVisual =
          h.estatus === "VENTA_CONTADO_COMPAQ"
            ? "VENTA DE CONTADO / SINCRONIZADA"
            : "AUTORIZADO Y SINCRONIZADO";
      } else if (h.estatus === "RECHAZADO") {
        colorEstatus = "#dc2626";
        textoEstatusVisual = "CRÉDITO RECHAZADO";
      } else if (h.estatus === "CANCELADO_LIBERADO") {
        colorEstatus = "#64748b";
        textoEstatusVisual = "CANCELADO / STOCK LIBERADO";
      }

      // Generar resumen textual de las partidas que incluye este pedido
      let partidasHtml = "";
      if (h.items && h.items.length > 0) {
        const resumenItems = h.items
          .map((it) => `• ${it.cantidad}x ${it.marca} ${it.medida}`)
          .join(" | ");
        partidasHtml = `<p style="font-size:0.8rem; color:#475569; margin-top:0.25rem;"><strong>Detalle:</strong> ${resumenItems}</p>`;
      }

      let accionesHtml = "";
      if (h.estatus === "APARTADO_24H") {
        accionesHtml = `
          <div style="display:flex; gap:0.5rem; margin-top:0.75rem;">
            <button class="btn" style="background:#16a34a; color:#fff; border:none; padding:0.4rem 0.8rem; border-radius:6px; cursor:pointer;" onclick="gestionarApartado(${indexOriginal}, 'CONVERTIR')">✅ Convertir a Venta</button>
            <button class="btn" style="background:#dc2626; color:#fff; border:none; padding:0.4rem 0.8rem; border-radius:6px; cursor:pointer;" onclick="gestionarApartado(${indexOriginal}, 'CANCELAR')">❌ Cancelar / Liberar Stock</button>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="item-card__header">
          <strong>Folio: ${h.folio}</strong>
          <span style="color:${colorEstatus}; font-weight:700; font-size:0.8rem;">${textoEstatusVisual}</span>
        </div>
        <p>Cliente: <strong>${h.cliente}</strong> | Fecha: ${h.fecha}</p>
        ${partidasHtml}
        <p style="margin-top:0.3rem;"><strong>Total Pedido: $${h.total.toLocaleString("es-MX", { minimumFractionDigits: 2 })}</strong></p>
        ${accionesHtml}
      `;
      cont.appendChild(card);
    });
}

// Función exclusiva del vendedor para manejar sus apartados
// Función exclusiva del vendedor para manejar sus apartados
function gestionarApartado(index, accion) {
  const apartado = historialCotizaciones[index];
  if (!apartado) return;

  if (accion === "CONVERTIR") {
    apartado.estatus = "VENTA_CONVERTIDA";

    solicitudesCredito.push({
      folio: apartado.folio,
      vendedor: usuarioActual ? usuarioActual.usuario : "vendedor",
      cliente: apartado.cliente,
      total: apartado.total,
      estatus: "PENDIENTE",
      items: apartado.items || [],
    });

    alert(
      `✅ ¡El apartado ${apartado.folio} fue confirmado y enviado al módulo de Crédito para su autorización!`,
    );
  } else if (accion === "CANCELAR") {
    apartado.estatus = "CANCELADO_LIBERADO";

    // Devolver el stock retenido al catálogo original
    if (apartado.items && apartado.items.length > 0) {
      apartado.items.forEach((item) => {
        const llanta = catalogoLlantas.find((l) => l.codigo === item.codigo);
        if (llanta) {
          llanta.stockCentral += item.apartadoCentral || 0;
          llanta.stockNorte += item.apartadoNorte || 0;
        }
      });
    }

    alert(
      `🚫 El apartado ${apartado.folio} fue cancelado y las llantas regresaron al inventario disponible.`,
    );
  }

  renderizarHistorialCotizaciones();
  if (typeof aplicarFiltrosInventario === "function")
    aplicarFiltrosInventario();
}

/**
 * Renderiza la bandeja de crédito ordenando primero las solicitudes PENDIENTES
 * y manteniendo el registro histórico de las ya autorizadas o rechazadas abajo.
 */
function renderizarModuloCredito() {
  const cont = document.getElementById("contenedorSolicitudesCredito");
  if (!cont) return;
  cont.innerHTML = "";

  if (solicitudesCredito.length === 0) {
    cont.innerHTML = `<p style="text-align:center; color:#64748b; padding:2rem;">No hay solicitudes de crédito corporativo registradas.</p>`;
    return;
  }

  // Ordenar el arreglo: Las pendientes van SIEMPRE hasta arriba, el resto abajo como historial
  const solicitudesOrdenadas = [...solicitudesCredito].sort((a, b) => {
    const esPendA =
      a.estatus === "PENDIENTE" || a.estatus === "PENDIENTE_CREDITO";
    const esPendB =
      b.estatus === "PENDIENTE" || b.estatus === "PENDIENTE_CREDITO";
    if (esPendA && !esPendB) return -1;
    if (!esPendA && esPendB) return 1;
    return 0; // Mantiene el orden de llegada
  });

  solicitudesOrdenadas.forEach((sol) => {
    // Aceptamos ambas variantes de estatus pendiente
    const esPendiente =
      sol.estatus === "PENDIENTE" || sol.estatus === "PENDIENTE_CREDITO";
    const card = document.createElement("article");
    card.className = "item-card";

    // Definir color de etiqueta según el estatus corporativo
    let colorBadge = "#fef08a"; // Amarillo por defecto (Pendiente)
    let textoEstatus = "PENDIENTE DE APROBACIÓN";

    if (sol.estatus === "AUTORIZADO_COMPAQ") {
      colorBadge = "#bbf7d0"; // Verde éxito
      textoEstatus = "AUTORIZADO Y SINCRONIZADO";
    } else if (sol.estatus === "RECHAZADO") {
      colorBadge = "#fecaca"; // Rojo alerta
      textoEstatus = "CRÉDITO RECHAZADO";
    }

    // Si está pendiente, mostramos los botones de acción; si no, la bitácora
    let accionesHtml = "";
    if (esPendiente) {
      accionesHtml = `
        <div style="display:flex; gap:0.5rem; margin-top:0.75rem;">
          <button class="btn" style="background:#16a34a; color:#fff; border:none; padding:0.4rem 0.8rem; border-radius:6px; cursor:pointer;" onclick="autorizarCredito('${sol.folio}', true)">✅ Autorizar Crédito</button>
          <button class="btn" style="background:#dc2626; color:#fff; border:none; padding:0.4rem 0.8rem; border-radius:6px; cursor:pointer;" onclick="autorizarCredito('${sol.folio}', false)">❌ Rechazar Crédito</button>
        </div>
      `;
    } else {
      accionesHtml = `
        <div style="margin-top:0.75rem; font-size:0.8rem; color:#64748b; border-top:1px dashed #cbd5e1; pt:0.5rem;">
          Resolución registrada en bitácora para el folio <strong>${sol.folio}</strong>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="item-card__header">
        <strong>${sol.folio}</strong>
        <span style="background:${colorBadge}; padding:0.2rem 0.5rem; border-radius:4px; font-size:0.75rem; font-weight:700; color:#1e293b;">${textoEstatus}</span>
      </div>
      <p>Vendedor: <strong>${sol.vendedor}</strong> | Cliente: <strong>${sol.cliente}</strong></p>
      <p>Monto Total: <strong>$${sol.total.toLocaleString("es-MX", { minimumFractionDigits: 2 })}</strong></p>
      ${accionesHtml}
    `;
    cont.appendChild(card);
  });
}

/**
 * Autoriza o rechaza una solicitud por Folio, sincroniza el historial del vendedor
 * y devuelve el stock al inventario en caso de ser rechazada.
 */
function autorizarCredito(folio, aprobado) {
  const sol = solicitudesCredito.find((s) => s.folio === folio);
  if (!sol) return;

  // Evitar procesar de nuevo si ya fue resuelta
  if (sol.estatus === "AUTORIZADO_COMPAQ" || sol.estatus === "RECHAZADO")
    return;

  const nuevoEstatus = aprobado ? "AUTORIZADO_COMPAQ" : "RECHAZADO";
  sol.estatus = nuevoEstatus;

  // Sincronizar en tiempo real el estatus en el historial del vendedor
  const hist = historialCotizaciones.find((h) => h.folio === folio);
  if (hist) {
    hist.estatus = nuevoEstatus;
  }

  // SI EL CRÉDITO ES RECHAZADO: Devolver el stock retenido al catálogo original
  if (!aprobado) {
    if (sol.items && sol.items.length > 0) {
      sol.items.forEach((item) => {
        const llanta = catalogoLlantas.find((l) => l.codigo === item.codigo);
        if (llanta) {
          llanta.stockCentral += item.apartadoCentral || 0;
          llanta.stockNorte += item.apartadoNorte || 0;
        }
      });
    }
  }

  alert(
    aprobado
      ? `✅ Venta ${folio} autorizada con éxito. Se ha integrado al historial y vinculado a CONTPAQi.`
      : `❌ Solicitud ${folio} rechazada. Las llantas han sido liberadas y devueltas al inventario disponible.`,
  );

  renderizarModuloCredito();

  // Refrescar inventario en vivo si está abierto para reflejar la devolución del stock
  if (typeof aplicarFiltrosInventario === "function") {
    aplicarFiltrosInventario();
  }
}

// ==========================================
// MÓDULO DE COBRANZA Y NOTIFICACIONES MASIVAS (CON EXCEPCIONES)
// ==========================================

let filtrosCobranza = {
  texto: "",
  montoMinimo: 0,
  diasVencidosMin: 0,
};

function configurarEventosFiltrosCobranza() {
  const txtBuscar = document.getElementById("txtBuscarCliente");
  const numMonto = document.getElementById("numMontoMinimo");
  const numDias = document.getElementById("numDiasVencidos");

  if (txtBuscar) {
    txtBuscar.oninput = (e) => {
      filtrosCobranza.texto = e.target.value;
      renderizarCobranza();
    };
  }
  if (numMonto) {
    numMonto.oninput = (e) => {
      filtrosCobranza.montoMinimo = parseFloat(e.target.value) || 0;
      renderizarCobranza();
    };
  }
  if (numDias) {
    numDias.oninput = (e) => {
      filtrosCobranza.diasVencidosMin = parseInt(e.target.value, 10) || 0;
      renderizarCobranza();
    };
  }
}

function renderizarCobranza() {
  const cont = document.getElementById("contenedorCobranza");
  const lblCant = document.getElementById("lblCantSeleccionados");
  const chkTodos = document.getElementById("chkSeleccionarTodos");
  const selectExcluir = document.getElementById("selectExcluirCliente");
  const contTags = document.getElementById("contenedorTagsExcluidos");

  if (!cont) return;

  // 1. POBLAR SELECTOR DE EXCEPCIONES
  if (selectExcluir) {
    selectExcluir.innerHTML =
      `<option value="">-- Seleccionar cliente para agregar a excepciones --</option>` +
      clientesCreditoVencido
        .filter((c) => !c.excluido)
        .map((c) => `<option value="${c.id}">${c.razonSocial}</option>`)
        .join("");

    selectExcluir.onchange = (e) => {
      const idCli = parseInt(e.target.value, 10);
      if (!idCli) return;
      excluirClienteCobranza(idCli, true);
    };
  }

  // 2. RENDERIZAR TAGS / CHIPS ROJOS DE EXCLUIDOS
  if (contTags) {
    contTags.innerHTML = "";
    const excluidosList = clientesCreditoVencido.filter((c) => c.excluido);

    if (excluidosList.length === 0) {
      contTags.innerHTML = `<span style="font-size: 0.8rem; color: #64748b; font-style: italic;">Sin excepciones aplicadas. Se enviará a todos los seleccionados.</span>`;
    } else {
      excluidosList.forEach((c) => {
        const tag = document.createElement("span");
        tag.style.cssText =
          "background: #fee2e2; color: #dc2626; border: 1px solid #fca5a5; padding: 0.25rem 0.6rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.4rem;";
        tag.innerHTML = `🚫 ${c.razonSocial} <button onclick="excluirClienteCobranza(${c.id}, false)" style="background: none; border: none; color: #dc2626; font-weight: 800; cursor: pointer; margin-left: 0.2rem;">✕</button>`;
        contTags.appendChild(tag);
      });
    }
  }

  // 3. APLICAR FILTROS Y EXCLUSIONES
  const clientesFiltrados = clientesCreditoVencido.filter((cli) => {
    const coincideTexto =
      cli.razonSocial
        .toLowerCase()
        .includes(filtrosCobranza.texto.toLowerCase()) ||
      cli.email.toLowerCase().includes(filtrosCobranza.texto.toLowerCase());
    const coincideMonto = cli.montoVencido >= filtrosCobranza.montoMinimo;
    const coincideDias = cli.diasVencido >= filtrosCobranza.diasVencidosMin;

    return coincideTexto && coincideMonto && coincideDias;
  });

  // 4. ACTUALIZAR CONTADOR DE SELECCIONADOS (Público no excluido)
  const seleccionadosValidos = clientesFiltrados.filter(
    (c) => c.seleccionado && !c.excluido,
  );
  if (lblCant) lblCant.textContent = seleccionadosValidos.length;

  // 5. CHECKBOX "SELECCIONAR TODOS"
  if (chkTodos) {
    const aptosParaMarcar = clientesFiltrados.filter((c) => !c.excluido);
    chkTodos.checked =
      aptosParaMarcar.length > 0 &&
      aptosParaMarcar.every((c) => c.seleccionado);

    chkTodos.onchange = (e) => {
      const estado = e.target.checked;
      clientesFiltrados.forEach((c) => {
        if (!c.excluido) c.seleccionado = estado;
      });
      renderizarCobranza();
    };
  }

  // 6. RENDERIZAR TARJETAS EN PANTALLA
  cont.innerHTML = "";

  if (clientesFiltrados.length === 0) {
    cont.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding:2rem; color:#64748b;">
        No se encontraron clientes que coincidan con los criterios de búsqueda.
      </div>
    `;
    return;
  }

  clientesFiltrados.forEach((cli) => {
    const card = document.createElement("article");
    const estaExcluido = cli.excluido;
    card.className = `cobranza-card ${cli.seleccionado && !estaExcluido ? "cobranza-card--selected" : ""}`;
    if (estaExcluido) {
      card.style.opacity = "0.6";
      card.style.background = "#f1f5f9";
    }

    card.innerHTML = `
      <div class="cobranza-card__header">
        <label class="cobranza-card__client" style="cursor:pointer;">
          <input type="checkbox" class="chk-cliente" ${cli.seleccionado && !estaExcluido ? "checked" : ""} ${estaExcluido ? "disabled" : ""}>
          <span style="${estaExcluido ? "text-decoration: line-through; color: #64748b;" : ""}">${cli.razonSocial}</span>
        </label>
        ${estaExcluido ? '<span class="cobranza-card__badge" style="background:#e2e8f0; color:#475569;">🚫 Excluido del Lote</span>' : `<span class="cobranza-card__badge">${cli.diasVencido} Días Vencido</span>`}
      </div>
      <div class="cobranza-card__details">
        <span>Monto Pendiente: <strong>$${cli.montoVencido.toLocaleString("es-MX", { minimumFractionDigits: 2 })}</strong></span>
        <span>Fecha Límite: <strong>${cli.fechaVencimiento}</strong></span>
        <span>Correo: <strong>${cli.email}</strong></span>
        <span>Estatus: 
          <strong style="color: ${cli.enviado ? "#16a34a" : "#dc2626"};">
            ${cli.enviado ? "✅ Notificado" : "Pendiente"}
          </strong>
        </span>
      </div>
      <div class="cobranza-card__actions" style="margin-top:0.5rem; display:flex; justify-content:space-between; align-items:center;">
        <button class="btn" style="background:none; border:none; color:${estaExcluido ? "#2563eb" : "#dc2626"}; font-size:0.75rem; cursor:pointer; text-decoration:underline;" onclick="excluirClienteCobranza(${cli.id}, ${!estaExcluido})">
          ${estaExcluido ? "➕ Reincorporar al Lote" : "🚫 Excluir de este Envío"}
        </button>
        <button class="btn btn-enviar-individual" style="background:#2563eb; color:#fff; font-size:0.8rem; padding:0.4rem 0.8rem; border:none; border-radius:6px; cursor:pointer; font-weight:600;">
          ${cli.enviado ? "🔄 Reenviar Mail" : "📧 Enviar Mail"}
        </button>
      </div>
    `;

    // Evento Checkbox individual
    const chkCliente = card.querySelector(".chk-cliente");
    if (chkCliente && !estaExcluido) {
      chkCliente.addEventListener("change", (e) => {
        cli.seleccionado = e.target.checked;
        renderizarCobranza();
      });
    }

    // Evento Envío individual
    const btnEnviarSolo = card.querySelector(".btn-enviar-individual");
    btnEnviarSolo.addEventListener("click", () => {
      cli.enviado = true;
      alert(
        `🚀 Notificación de cobranza enviada con éxito a:\n\n${cli.razonSocial}\nCorreo: ${cli.email}\nSaldo Pendiente: $${cli.montoVencido.toLocaleString("es-MX", { minimumFractionDigits: 2 })} MXN`,
      );
      renderizarCobranza();
    });

    cont.appendChild(card);
  });

  // 7. EVENTO ENVÍO MASIVO
  const btnEnviarMasivo = document.getElementById("btnEnviarMasivo");
  if (btnEnviarMasivo) {
    btnEnviarMasivo.onclick = () => {
      const paraEnviar = clientesCreditoVencido.filter(
        (c) => c.seleccionado && !c.excluido,
      );
      if (paraEnviar.length === 0) {
        alert(
          "⚠️ Por favor marca al menos un cliente válido para realizar el envío masivo.",
        );
        return;
      }

      alert(
        `🚀 ¡Proceso de envío masivo completado!\n\nSe enviaron ${paraEnviar.length} correos de cobranza personalizados. Los clientes en la lista de excepciones fueron omitidos correctamente.`,
      );

      paraEnviar.forEach((c) => {
        c.enviado = true;
        c.seleccionado = false;
      });

      renderizarCobranza();
    };
  }

  configurarEventosFiltrosCobranza();
}

function excluirClienteCobranza(id, esExcluido) {
  const c = clientesCreditoVencido.find((x) => x.id === id);
  if (c) {
    c.excluido = esExcluido;
    if (esExcluido) c.seleccionado = false;
    else c.seleccionado = true;
  }
  renderizarCobranza();
}

function renderizarAdminUsuarios() {
  const cont = document.getElementById("contenedorUsuarios");
  if (!cont) return;

  cont.innerHTML = `
    <div style="grid-column: 1 / -1; background:#f8fafc; padding:1rem; border-radius:8px; border:1px solid #cbd5e1; margin-bottom:1rem;">
      <h3 style="font-size:1rem; margin-bottom:0.5rem; color:#1e293b;">➕ Dar de Alta Nuevo Usuario</h3>
      <form id="formNuevoUsuario" style="display:grid; grid-template-columns: 2fr 2fr 1fr auto; gap:0.5rem; align-items:center;">
        <input type="text" id="nuevoUserNombre" placeholder="Usuario (ej. vendedor.pepe)" class="filters-cobranza__input" required />
        <select id="nuevoUserRol" class="client-card__select" required>
          <option value="Vendedor Sucursal">Vendedor Sucursal</option>
          <option value="Autorizador de Crédito">Autorizador de Crédito</option>
          <option value="Consulta / Lectura">Consulta / Lectura</option>
          <option value="Administrador General">Administrador General</option>
        </select>
        <button type="submit" class="btn" style="background:#16a34a; color:#fff; border:none; padding:0.6rem; border-radius:6px; cursor:pointer; font-weight:600;">Registrar</button>
      </form>
    </div>
  `;

  usuariosSistema.forEach((u) => {
    const card = document.createElement("article");
    card.className = "item-card";
    const esAdminPrincipal = u.esAdmin && u.usuario === "yayo.admin";

    card.innerHTML = `
      <div class="item-card__header">
        <h3>${u.usuario}</h3>
        <span style="color:${u.activo ? "#16a34a" : "#dc2626"}; font-weight:700; font-size:0.8rem;">
          ${u.activo ? "Activo" : "Bloqueado"}
        </span>
      </div>
      <p>Rol: <strong>${u.rol}</strong></p>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.5rem;">
        <span style="font-size:0.8rem; color:#64748b;">${esAdminPrincipal ? "Acceso Protegido" : "Estado de cuenta:"}</span>
        ${
          esAdminPrincipal
            ? '<span style="font-size:0.8rem; font-weight:600; color:#2563eb;">Admin Principal</span>'
            : `
          <label class="switch">
            <input type="checkbox" class="switch__input" ${u.activo ? "checked" : ""} onchange="toggleEstadoUsuario(${u.id}, this.checked)">
            <span class="switch__slider"></span>
          </label>
        `
        }
      </div>
    `;
    cont.appendChild(card);
  });

  // Listener para el formulario de alta
  const formAlta = document.getElementById("formNuevoUsuario");
  if (formAlta) {
    formAlta.onsubmit = (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nuevoUserNombre").value.trim();
      const rolSeleccionado = document.getElementById("nuevoUserRol").value;

      if (
        usuariosSistema.some(
          (u) => u.usuario.toLowerCase() === nombre.toLowerCase(),
        )
      ) {
        alert("⚠️ El nombre de usuario ya existe.");
        return;
      }

      let permisosAsignados = ["inventario"];
      let esAdmin = false;
      if (rolSeleccionado.includes("Vendedor"))
        permisosAsignados = ["inventario", "cotizador", "historial"];
      if (rolSeleccionado.includes("Crédito"))
        permisosAsignados = ["inventario", "credito"];
      if (rolSeleccionado.includes("Administrador")) {
        esAdmin = true;
        permisosAsignados = [
          "inventario",
          "cotizador",
          "historial",
          "credito",
          "cobranza",
          "admin",
        ];
      }

      usuariosSistema.push({
        id: usuariosSistema.length + 1,
        usuario: nombre,
        rol: rolSeleccionado,
        activo: true,
        esAdmin: esAdmin,
        permisos: permisosAsignados,
      });

      alert(`✅ Usuario "${nombre}" registrado con éxito.`);
      renderizarAdminUsuarios();
    };
  }
}

function toggleEstadoUsuario(id, estado) {
  const user = usuariosSistema.find((u) => u.id === id);
  if (user) {
    user.activo = estado;
    renderizarAdminUsuarios();
  }
}
