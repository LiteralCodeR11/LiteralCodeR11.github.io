import { listaVideos } from "../app/dataBase/dbVideos.js";
import { MenuVideos, limpiarSectionGrupos } from "../app/mapa/mapaSitio.js";

function crearMenuVideos() {
  const idLista = document.getElementById("idMenuVideos");
  const idGrupos = document.getElementById("grupos");
  const categoriaVideo = Object.values(listaVideos);

  idLista.innerHTML = `
    
        
        <li>Todos</li>
        ${MenuVideos()}
      
    `;
  eventosMenuVideos(idLista, idGrupos);
  crearNivel1_CategoriasVideos(idGrupos, categoriaVideo);
}

function eventosMenuVideos(idLista, idGrupos) {
  let targetVideo = "Todos";

  idLista.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    if (e.target && e.target.tagName === "LI") {
      let filtroCategoriaVideos = listaVideos.filter(
        (f) => f.categoria_videos === e.target.innerText
      );
      limpiarSectionGrupos();
      if (e.target.innerText === "Todos") {
        crearNivel1_CategoriasVideos(idGrupos, listaVideos);
      } else {
        crearNivel1_CategoriasVideos(idGrupos, filtroCategoriaVideos);
      }
    }
  });
}

function crearNivel1_CategoriasVideos(idGrupos, categoriaVideo) {
  console.log("crearNivel1_CategoriasVideos: ok");
  idGrupos.innerHTML += categoriaVideo
    .map(
      (m) =>
        `         
          <h2>${m.categoria_videos}</h2>
          <hr>        
          <div id="videoItem" class="contenedor-videos">            
            ${crearLista(m.grupo_videos)}
          </div>
    `
    )
    .join("");
}

function filtrarVideos(targetVideo) {
  console.log("filtrar:" + targetVideo);
  const videoItem = document.getElementById("videoItem");
  if (targetVideo == "Todos") {
    console.log("ok");
    videoItem.innerHTML = `${listaVideos[0].map(crearLista).join("")}`;
  } else {
    const result = listaVideos.filter((x) => x.categoria == targetVideo);
    videoItem.innerHTML = `${result.map(crearLista).join("")}`;
  }
}

function crearLista(obj) {
  return Object.values(obj).map(
    (registro) => `  
    <div class="ficha-video-item">
        <figure>
            <img onclick='crearVideos("https://www.youtube.com/embed/${
              registro.idVideo
            }")'
                src="https://i.ytimg.com/vi/${registro.idVideo}/${
      registro.imagen
    }.jpg" 
                alt="${registro.titulo}"  
                width="${registro.imgAncho}" height="${registro.imgAlto}">
        </figure>
        
        <div class="textos">
            <h2>${registro.titulo}</h2>
            <h3>${registro.canal}</h3>
            <p style="display:none">${registro.texto} </p>        
            <h3 class="todos">${
              document.getElementById("todos") ? registro.categoria : ""
            }</h3>
                
        </div>
    
    </div>
        `
  );
}

crearMenuVideos();
