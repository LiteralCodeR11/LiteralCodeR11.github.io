import { dbRutas } from "../dataBase/dbRutas.js";
import { crearListaCategorias, EventosCategorias } from "./mapaSitio.js";

const ruta11 = dbRutas.filter((f) => f.id != 12);

const menu = document.getElementById("menu");
menu.addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "A") {
    let targetText = e.target.innerText;
    if (targetText === "DIRECTORIO") {
      /* quitarIdGrupo();
      crearModelo1(ruta11); */
    }
    if (targetText === "BLOG") {
      /* quitarIdGrupo();
      crearModelo2(ruta11); */
    }
    if (targetText === "MAPA DEL SITIO") {
      crearListaCategorias(ruta11);
      EventosCategorias(ruta11);
    }
  }
});

function quitarIdGrupo() {
  const idGrupos = document.getElementById("grupos");
  idGrupos.innerText = "";
}

crearListaCategorias(ruta11);
EventosCategorias(ruta11);
