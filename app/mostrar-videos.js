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
          <p style="display:none">${registro.texto}</p>        
          <h3 class="todos">${
            document.getElementById("Todos") ? registro.categoria : ""
          }</h3>
              
      </div>
  
  </div>
      `;
  }
  
  function mostrarVideos() {
    const filtrar = document.getElementsByTagName("body")[0].id;
  
    if (filtrar == "todos") {
      const videoItem = document.getElementById("videoItem");
      videoItem.innerHTML += `${listaVideos.map(crearLista).join("")}`;
    } else {
      const result = listaVideos.filter((x) => x.categoria == filtrar);
      const videoItem = document.getElementById("videoItem");
      videoItem.innerHTML += `${result.map(crearLista).join("")}`;
    }
  }
  
  mostrarVideos();