import { listaLibros } from "./dataBase/dbLibros.js";

function crearLista(registro) {
  return `
  <div class="cards-item">
      <figure>
          <a href="${registro.enlace}" target="${registro.tipoTarget}">
              <img class="libros" src="${registro.imagen}" alt="${registro.titulo}">
          </a>
      </figure>
      
      <div class="textos">
          <h2>${registro.titulo}</h2>
          <h3>${registro.autor}</h3>
          <h3>${registro.edicion} | ${registro.year}</h3>
          <h3>Categoría: ${registro.categoria}</h3>
          <p style="display:none">${registro.texto}</p> 
      </div>
  
  </div>
      `;
}

function mostrarLibros() {
  const libroItem = document.getElementById("card-container");
  libroItem.innerHTML = `${listaLibros.map(crearLista).join("")}`;
}

mostrarLibros();
