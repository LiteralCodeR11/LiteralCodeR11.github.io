function crearEncabezado() {
  return `
    <a href="index.html" class="logo">
        <figure >  
            <img src="../public/images/logo-code-r11-04.png" alt="logo CODE R11"  >
        </figure>
    </a>

    <nav>
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="proyecto-code-r11.html">Code R11</a></li>
            <li><a href="Blog.html">Blog</a></li>
        </ul>
    </nav>`;
}

function crearPiePagina() {
  return `
        <p>Design by J.Martinez | 2022 Equipo Code R11</p>
        <p>Aprendizaje Activo basado en Proyectos</p>
        `;
}

function mostrarEncabezado() {
  const idHeader = document.getElementById("menuAppHeader");
  idHeader.innerHTML = `${crearEncabezado()}`;
}

function mostrarPieDePagina() {
  let footerSection1 = document.getElementById("footer-section1");
  footerSection1.innerHTML = `${crearPiePagina()}`;
}

mostrarEncabezado();

mostrarPieDePagina();
