import { listaLibros } from "../dataBase/dbLibros.js";
import { listaVideos } from "../dataBase/dbVideos.js";

export function crearListaCategorias(rutas) {
  const idCategorias = document.getElementById("categorias");
  const idGrupos = document.getElementById("grupos");
  idCategorias.innerHTML = `
    <h2>Code R11: Mapa del Sitio</h2>
    <ol id="lista">${mostrarCategorias(rutas)}</ol>
  `;
}

export function mostrarCategorias(dbRutas) {
  return Object.values(dbRutas)
    .map(
      (m) => `
      <li>
        <a href="#"> 
          ${m.titleH2}
        </a>  
      </li>
      `
    )
    .join("");
}

export function EventosCategorias(ruta) {
  const lista = document.getElementById("lista");
  crearNivel1_Categorias(ruta, ruta[0].titleH2);
  lista.addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "A") {
      let categoria = e.target.innerText;
      crearNivel1_Categorias(ruta, categoria);
    }
  });
}

export function crearNivel1_Categorias(dbRutas, categoria) {
  let filtrar = Object.values(dbRutas.filter((f) => f.titleH2 === categoria));
  const idGrupos = document.getElementById("grupos");
  const idMenuSection = document.getElementById("menu-section")

  if (
    filtrar[0].group &&
    filtrar[0].group.length > 0 &&
    filtrar[0].category != "videos-tutoriales"
  ) {
    limpiarSectionMenu();
    idGrupos.innerHTML = `<h2 class="siteMap-H2">${categoria}</h2>`;
    idGrupos.innerHTML += ` 
      <div class="site-map-cards">
        ${crearNivel2_Grupos(filtrar[0].group)}
      </div>`;
    if (
      filtrar[0].ingles &&
      filtrar[0].ingles.length > 0 &&
      filtrar[0].category === "herramientas"
    ) {
      idGrupos.innerHTML += `<h2 class="siteMap-H2">Inglés para Diseñadores y Desarrolladores Web</h2>`;
      idGrupos.innerHTML += ` 
      <div class="site-map-cards">
        ${crearNivel2_Grupos(filtrar[0].ingles)}
      </div>
      `;
    }
  }

  if (filtrar[0].category === "libros") {
    limpiarSectionMenu();
    idGrupos.innerHTML = `<h2 class="siteMap-H2">${categoria}</h2>`;
    idGrupos.innerHTML += ` 
    <div class="site-map-cards">
    ${listaLibros.map(crearListaLibros).join("")}
    </div>`;
  }
  if (filtrar[0].category === "videos-tutoriales") {
    let categoriaVideo = Object.values(listaVideos);
    idMenuSection.innerHTML = `
      <div>
        <ul id="idMenuVideos" class="menuVideos">  
          <li>Todos</li>
          ${MenuVideos()}
        </ul>
      </div> 
      
    `;    
    limpiarSectionGrupos();
    crearNivel1_CategoriasVideos(idGrupos,categoriaVideo)
    cargarEventosMenu(idGrupos);  
  }
}

export function crearNivel2_Grupos(obj) {
  return Object.values(obj)
    .map(
      (m) => `
     
      <div class="sm-card">
        <h2>
          <a href="${m.linkHref}" target="${m.targetType}">
            ${m.titleH2}:
          </a>
        </h2>
        <p>${m.titleH3}</p>
        <ul>${crearNivel3(m.cursos)}</ul>
      </div>
     
  `
    )
    .join("");
}

export function crearNivel3(obj) {
  let mostrar = "";
  for (let val in obj) {
    mostrar += `
      <li>
        <a href="${obj[val].linkHref}" target="${obj[val].targetType}">
          ${obj[val].titleH2}
        </a>  
      </li>
    `;
  }
  return mostrar;
}

/**Videos */
export function MenuVideos() {
  return Object.values(listaVideos)
    .map(
      (m) => `  
    <li>    
      ${m.categoria_videos}
    </li>
  `
    )
    .join("");
}

export function crearListaVideos(obj) {
  return Object.values(obj)
    .map(
      (registro) => `
      
      <div class="sm-card">
        <div>
          <h2>
            <a href="https://www.youtube.com/embed/${registro.idVideo}" target="_black">
              ${registro.titulo}
            </a>
          </h2>
          <div class="video-imagen-texto">
            <figure>
                <img onclick='crearVideos("https://www.youtube.com/embed/${registro.idVideo}")'
                    src="https://i.ytimg.com/vi/${registro.idVideo}/${registro.imagen}.jpg" 
                    alt="${registro.titulo}"  
                >
            </figure>
            <p><b>${registro.canal}</b></p>
            <p>${registro.texto}</p>            
          </div>  
        </div>
      </div>     
  `
    )
    .join("");
}

function cargarEventosMenu(idGrupos) {
  const idMenu = document.getElementById("idMenuVideos");
  idMenu.addEventListener("click", (e) => {
    console.log(e.target.innerText)
    if (e.target && e.target.tagName === "LI") {
      let filtroCategoriaVideos = listaVideos.filter(f => f.categoria_videos === e.target.innerText)
      limpiarSectionGrupos();
      if(e.target.innerText === "Todos"){
        crearNivel1_CategoriasVideos(idGrupos,listaVideos)
      } else {
        crearNivel1_CategoriasVideos(idGrupos,filtroCategoriaVideos)
      }
    }
  })
}

function crearNivel1_CategoriasVideos(idGrupos,categoriaVideo){
  idGrupos.innerHTML += categoriaVideo
      .map(
        (m) =>
          `         
          <h2>${m.categoria_videos}</h2>
          <hr>        
          <div class="site-map-cards">            
            ${crearListaVideos(m.grupo_videos)}
          </div>
    `
      )
      .join("");
}

/** Libros */

function crearListaLibros(registro) {
  return `
  <div class="sm-card">
    <h2>
      <a href="${registro.enlace}" target="${registro.tipoTarget}">
        ${registro.titulo}
      </a>
    </h2>
    <p>${registro.texto}</p>
    <p>${registro.autor}|${registro.edicion}|  ${registro.year}</p>
  </div>
    `;
}

/**Limpiar datos */
export function limpiarSectionGrupos() {
  const idGrupos = document.getElementById("grupos");
  idGrupos.innerText = "";
}

export function limpiarSectionMenu() {
  const idMenuSection = document.getElementById("menu-section");
  idMenuSection.innerText = "";
}
