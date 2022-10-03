function crearEncabezado() {
  return `
    <a href="index.html" class="logo">
        <figure >  
            <img src="../public/images/logo-code-r11-04.png" alt="logo CODE R11"  >
        </figure>
    </a>

    <nav>
      <div class="redes-sociales">
        <a href="https://twitter.com/LiteralCodeR11" target="_blank">
            <figure>
                <img src="/public/images/redes-sociales/twitter-svgrepo-com.svg" alt="Logo Twitter">
            </figure>
        </a>
        <a href="https://www.facebook.com/LiteralCodeR11" target="_blank">
            <figure>
                <img src="/public/images/redes-sociales/facebook-svgrepo-com.svg" alt="Logo Facebook">
            </figure>
        </a>
        <a href="https://github.com/LiteralCodeR11" target="_blank">
            <figure>
                <img src="/public/images/redes-sociales/github-svgrepo-com.svg" alt="Logo GitHub">
            </figure>
        </a>
      </div>
      <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="sitemap.html">Mapa</a></li>
          <li><a href="proyecto-code-r11.html">Nosotros</a></li>
          
      </ul>
    </nav>`;
}

function crearPiePagina() {
  return `
    <a class="email-coder11" href="mailto:literalcoder11@gmail.com">literalcoder11@gmail.com</a> 
    <p>Design by Juan Alvaro Martinez | 2022 Equipo Code R11 </p>         
    <p>Aprendizaje Activo basado en Proyectos | <a href="https://github.com/LiteralCodeR11/LiteralCodeR11.github.io" target="_blank" class="links-footer">GitHub</a></p>        
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
