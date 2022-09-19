const listaVideos = [
  {
    idVideo: "WjBfC2AATys",
    imagen: "hq720",
    titulo: "Inglés para Programadores - Presentación del curso 🎉Principiantes",
    canal: "English for Devs Club",
    texto: "Presentación del Curso de Inglés para Programadores",
    categoria: "Curso",
    etiqueta: "",
  },
  {
    idVideo: "V08k_8SbJsY",
    imagen: "hq720",
    titulo: "Mitos que aún CREES sobre APRENDER INGLÉS",
    canal: "Platzi | Freddy Vegas",
    texto: "¿Qué te detiene de aprender inglés?",
    categoria: "Consejos",
    etiqueta: "",
  },
  {
    idVideo: "ZvorMuMyoFM",
    imagen: "hq720",
    titulo: "¡MEJORA tu INGLÉS con estos recursos!",
    canal: "Midudev",
    texto:
      " ¿Quieres saber cómo he mejorado mi inglés? Más allá de ponerlo todo con subtítulos y consumir series y películas en versión original.",
    categoria: "Consejos",
    etiqueta: "",
  },
  {
    idVideo: "x-Sthhb37uQ",
    imagen: "hq720",
    titulo: "Como Aprendí Ingles siendo Programador",
    canal: "Fazt",
    texto:
      "Aprender el idioma inglés es una habilidad que puede ayudarte a mejorar como programador, dandote la posibilidad de adquirir nuevos conocimientos actualizados, u obtener un trabajo.",
    categoria: "Consejos",
    etiqueta: "",
  },
];

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
            width="" height="${registro.imgAlto}">
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

function mostrarVideosIngles() {
  const filtrar = document.getElementsByTagName("body")[0].id;

  if (filtrar == "Todos") {
    const videoItem = document.getElementById("videoItem");
    videoItem.innerHTML += `${listaVideos.map(crearLista).join("")}`;
  } else {
    const result = listaVideos.filter((x) => x.categoria == filtrar);
    const videoItem = document.getElementById("videoItem");
    videoItem.innerHTML += `${result.map(crearLista).join("")}`;
  }
}

mostrarVideosIngles();
