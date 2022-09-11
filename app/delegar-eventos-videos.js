const lista = document.getElementById("lista");
const categoria = document.getElementsByTagName("body")[0];

let targetVideo = "Todos";

lista.addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "A") {
    targetVideo = e.target.innerText;
    filtarVideos();
  }
});

function filtarVideos() {
  console.log("filtar:" + targetVideo);
  const videoItem = document.getElementById("videoItem");
  if (targetVideo == "Todos") {
    videoItem.innerHTML = `${listaVideos.map(crearLista).join("")}`;
  } else {
    const result = listaVideos.filter((x) => x.categoria == targetVideo);
    videoItem.innerHTML = `${result.map(crearLista).join("")}`;
  }
}

function crearLista(registro) {
  return `
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
        `;
}
