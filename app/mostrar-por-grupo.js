import { dbRutas } from "./dataBase/dbRutas.js";

function createCardsG(cCards) {
  return `
    <div class="cards-item left">
        <a href="${cCards.linkHref}" target="${cCards.targetType}">
            <img src="${cCards.imgSrc}"
                alt="${cCards.titleH2}" width="${cCards.imgWidth}" height="${
    cCards.imgHeight
  }" >
        </a>
        <h2>${cCards.titleH2}</h2>
        ${cCards.social_Media ? redesMentores(cCards) : '' }        
        <h3 class="mentor">${cCards.titleH3}</h3>
        <p>${cCards.contents}</p>
    </div>
    `;
}

function redesMentores(cCards){
  return `   
  <ul class='redesMentores' > 
    <li><a href="${cCards.social_Media[0].sitioWeb}" target="_black">W</a></li>    
    <li><a href="${cCards.social_Media[0].twitter} target="_black"">T</a></li>
    <li><a href="${cCards.social_Media[0].youtube}" target="_black">Y</a></li>
  </ul>  
  `
}

function innerHTMLTecnologia() {
  let idCategoria = document.querySelector("body");
  let classCategoria = document.querySelector(".cards").classList[1];
  let doc = document.getElementById("card-container");

  if (idCategoria.id == classCategoria) {
    doc.innerHTML = `${result[0].group.map(createCardsG).join("")}`;
  } else if (doc) {
    let cod = document.querySelector(".cards").classList[1];
    let objCursos = Object.values(result[0].group).filter(
      (f) => f.codgrupo === cod
    );
    doc.innerHTML = `${objCursos[0].cursos.map(createCardsG).join("")}`;
  }

  /* else if (doc) {
    let cod = document.querySelector(".cards").classList[2];
    doc.innerHTML = `${result[0].group[cod].cursos.map(createCardsG).join("")}`;
  }  */

  return { idCategoria, classCategoria };
}

function innerHTMLIngles() {
  let docIngles = document.getElementById("card-container-ingles");
  if (docIngles && idCategoria.id == classCategoria) {
    docIngles.innerHTML = `${result[0].ingles.map(createCardsG).join("")}`;
  } else if (docIngles) {
    let cod = document.querySelector(".cards").classList[2];
    docIngles.innerHTML = `${result[0].ingles[cod].cursos
      .map(createCardsG)
      .join("")}`;
  }
}

let filtrar = document.getElementsByTagName("body")[0].id;
const result = dbRutas.filter((x) => x.category == filtrar);

let { idCategoria, classCategoria } = innerHTMLTecnologia();
innerHTMLIngles();
