// ==========================================
// SCRIPT PRINCIPAL - PORTAFOLIO JEAR
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // Referencias a elementos del DOM
  const galleryContainer = document.getElementById("gallery-container");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // Variable global para almacenar los proyectos cargados
  let allProjects = [];

  // 1. Función para cargar los datos del JSON
  async function loadGalleryData() {
    try {
      // Hacemos el fetch al archivo JSON que creamos en la carpeta data
      const response = await fetch("data/gallery.json");

      if (!response.ok) {
        throw new Error("No se pudo cargar la información de la galería.");
      }

      allProjects = await response.json();

      // Renderizamos todos los proyectos por defecto al iniciar
      renderGallery(allProjects);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      galleryContainer.innerHTML = `
                <p style="grid-column: 1 / -1; text-align: center; color: #94a3b8;">
                    Próximamente más proyectos en esta sección. ¡Agrega elementos a tu JSON!
                </p>`;
    }
  }

  // 2. Función para pintar las tarjetas en el HTML
  function renderGallery(projectsToRender) {
    // Limpiamos el contenedor antes de inyectar
    galleryContainer.innerHTML = "";

    if (projectsToRender.length === 0) {
      galleryContainer.innerHTML =
        '<p style="text-align: center; color: #94a3b8;">No hay proyectos en esta categoría por el momento.</p>';
      return;
    }

    // Recorremos cada proyecto del JSON para armar su estructura HTML
    projectsToRender.forEach((project) => {
      const itemHTML = `
                <article class="gallery-item" data-category="${project.category}">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="gallery-item__content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                </article>
            `;
      galleryContainer.insertAdjacentHTML("beforeend", itemHTML);
    });
  }

  // 3. Lógica de filtrado por categoría al hacer clic en los botones
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Quitamos la clase 'active' de todos los botones y la ponemos en el actual
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");

      const filterValue = e.target.getAttribute("data-filter");

      if (filterValue === "all") {
        renderGallery(allProjects);
      } else {
        // Filtramos el arreglo según la categoría seleccionada ('3d' o 'excel')
        const filteredProjects = allProjects.filter(
          (project) => project.category === filterValue,
        );
        renderGallery(filteredProjects);
      }
    });
  });

  // Inicializamos la carga de la galería
  loadGalleryData();
});
