import { listaVideos } from "./dataBase/dbVideos.js";

function crearLista(obj) {
  if (!Array.isArray(obj) || obj.length === 0 || !obj[0].grupo_videos) {
    console.error("El objeto no tiene el formato esperado.");
    return "";
  }
  
  const todosElement = document.getElementById("Todos");
  
  return Object.values(obj[0].grupo_videos).map((registro) => `
    <div class="ficha-video-item">
      <figure>
        <img onclick='crearVideos("https://www.youtube.com/embed/${registro.idVideo}")'
             src="https://i.ytimg.com/vi/${registro.idVideo}/${registro.imagen}.jpg"
             alt="${registro.titulo}"
             width="${registro.imgAncho}" height="${registro.imgAlto}">
      </figure>
      <div class="textos">
        <h2>${registro.titulo}</h2>
        <h3>${registro.canal}</h3>
        <p style="display:none">${registro.texto}</p>
        <h3 class="todos">${todosElement ? registro.categoria : ""}</h3>
      </div>
    </div>
  `).join("");
}

function mostrarVideos() {
  const filtrar = document.getElementsByTagName("body")[0].id;
  if (filtrar == "todos") {
    const videoItem = document.getElementById("videoItem");
    videoItem.innerHTML += `${listaVideos.map(crearLista).join("")}`;
  } else {
    const result = Object.values(listaVideos).filter(
      (x) => x.categoria_videos === filtrar
    );
    const videoItem = document.getElementById("videoItem");
    videoItem.innerHTML = crearLista(result);
  }
}

mostrarVideos();
