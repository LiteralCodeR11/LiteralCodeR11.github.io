/* {
        idVideo: "",
        imagen: "hq720",
        titulo: "TITULO",
        canal: "CANAL",
        texto: "TEXTO",
        categoria: "",
        etiqueta: "",
    }, */

const listaVideos = [
  {
    idVideo: "MJkdaVFHrto",
    imagen: "hq720",
    titulo: "Aprende HTML ahora! curso completo GRATIS desde cero",
    canal: "HolaMundo",
    texto: "curso completo",
    categoria: "HTML",
    etiqueta: "Tutorial",
  },
  {
    idVideo: "rbuYtrNUxg4",
    imagen: "hq720",
    titulo: "Curso HTML para Principiantes",
    canal: "Fazt",
    texto:
      "Introducción a HTML, el lenguaje que permite la creación de paginas y sitios web y es una de las tecnologías fundamentales del desarollo web, tanto de aplicaciones Grandes como de sitios web pequeños.",
    categoria: "HTML",
    etiqueta: "Tutorial",
  },
  {
    idVideo: "qz0aGYrrlhU",
    imagen: "hq720",
    titulo: "HTML Tutorial for Beginners: HTML Crash Course",
    canal: "Programming with Mosh",
    texto:
      "HTML is the language behind every website on the Internet! It's a markup language used to define the structure and content of web pages. It's the first language you need to learn if you want to become a web developer.",
    categoria: "HTML",
    etiqueta: "Tutorial",
  },
  {
    idVideo: "kUMe1FH4CHE",
    imagen: "hq720",
    titulo: "Learn HTML – Full Tutorial for Beginners (2022)",
    canal: "freeCodeCamp.org",
    texto:
      "Learn HTML in this complete course for beginners. This is an all-in-one beginner tutorial to help you learn web development skills. This course teaches HTML5.",
    categoria: "HTML",
    etiqueta: "Tutorial",
  },
  /**CSS */
  {
    idVideo: "wZniZEbPAzk",
    imagen: "hq720",
    titulo: "Aprende CSS ahora! curso completo GRATIS desde cero",
    canal: "HolaMundo",
    texto: "Aprende CSS",
    categoria: "CSS",
    etiqueta: "",
  },
  {
    idVideo: "XqFR2lqBYPs",
    imagen: "hq720",
    titulo: "Aprende HTML y CSS - Curso Desde Cero",
    canal: "freeCodeCamp Español",
    texto:
      "En este curso aprenderás los fundamentos de HTML y CSS paso a paso con ejemplos detallados.",
    categoria: "CSS",
    etiqueta: "",
  },
  {
    idVideo: "G3e-cpL7ofc",
    imagen: "hq720",
    titulo: "HTML & CSS Full Course - Beginner to Pro (2022)",
    canal: "SuperSimpleDev",
    texto:
      "In this full course, we learn how to build websites with HTML and CSS, and get started as a software engineer",
    categoria: "CSS",
    etiqueta: "",
  },
  {
    idVideo: "EVBlLkfh2V0",
    imagen: "hq720",
    titulo: "Guía Completa de Flexbox Animada|CSS",
    canal: "Vida MRR - Programacion web",
    texto: "Curso completo para aprender Flexbox en CSS",
    categoria: "CSS",
    etiqueta: "",
  },
  {
    idVideo: "Xt1Cw4qM3Ec",
    imagen: "hq720",
    titulo: "Josh Comeau – Secret Mechanisms of CSS",
    canal: "9elements",
    texto:
      "CSS a veces puede parecer un lenguaje muy inconsistente. ¿Por qué este fragmento que he usado innumerables veces de repente se comporta de manera diferente? Resulta que están sucediendo muchas cosas debajo del capó. CSS es una colección de algoritmos de diseño complejos, con todo tipo de mecanismos ocultos y comportamientos implícitos. Cuando nos tomamos el tiempo para aprender cómo funciona CSS, el lenguaje comienza a tener mucho más sentido y las sorpresas desagradables se vuelven mucho menos comunes.",
    categoria: "CSS",
    etiqueta: "",
  },
  {
    idVideo: "e5G1e_ApXPk",
    imagen: "hq720",
    titulo: "CSS para desarrolladores JavaScript 🎨- P1 ",
    canal: "vamoacodear",
    texto:
      "CSS para desarrolladores de JavaScript by Josh Comeau: lista completa: <a href='https://www.youtube.com/watch?v=e5G1e_ApXPk&list=PLX4PpbBSOPBSJnqP8XcKXXrJ49iSKIg5D' target='_blank'>19 videos</a>.",
    categoria: "CSS",
    etiqueta: "",
  },
  {
    idVideo: "ESAXStllfcw",
    imagen: "hq720",
    titulo: "Kevin Powell - Flexbox vs. Grid",
    canal: "9elements",
    texto:
      "Crear diseños con CSS puede ser complicado, y es complicado por el hecho de que tenemos dos herramientas de diseño diferentes en Flexbox y Grid. Decidir cuál usar en una situación dada no siempre es obvio, pero puede ser mucho más fácil cuando nos apoyamos en las fortalezas de cada uno.",
    categoria: "CSS",
    etiqueta: "",
  },
  {
    idVideo: "rm7bOdKaSys",
    imagen: "hq720",
    titulo: "Ventana Modal Responsive con Html y Css",
    canal: "SLee Dw",
    texto: "Crea una ventana modal Responsive con Html y Css.",
    categoria: "CSS",
    etiqueta: "",
  },
  {
    idVideo: "w_MTKN5PstQ",
    imagen: "hq720",
    titulo: "Consejos que todo diseñador debe conocer",
    canal: "Platzi",
    texto: "Consejos que todo diseñador debe conocer.",
    categoria: "CSS",
    etiqueta: "",
  },
  /**Javascript*/
  {
    idVideo: "RqQ1d1qEWlE",
    imagen: "hq720",
    titulo: "Curso Javascript para Principiantes",
    canal: "Fazt",
    texto:
      "Este curso es una introducción práctica a Javascript, conoceremos su sintaxis básicas y aprenderás los fundamentos del Lenguaje.",
    categoria: "JavaScript",
    etiqueta: "",
  },
  {
    idVideo: "ivdTnPl1ND0",
    imagen: "hq720",
    titulo: "Aprende JavaScript - Curso Completo desde Cero",
    canal: "freeCodeCamp Español",
    texto:
      "En este curso completo de JavaScript aprenderás todo lo que necesitas saber para comenzar a trabajar este lenguaje de programación paso a paso con ejemplos.",
    categoria: "JavaScript",
    etiqueta: "",
  },
  {
    idVideo: "8dWL3wF_OMw",
    imagen: "hq720",
    titulo: "JavaScript for Beginners",
    canal: "Bro Code",
    texto: "JavaScript tutorial for beginners full course",
    categoria: "JavaScript",
    etiqueta: "",
  },
  {
    idVideo: "ZGB_hQiI4ac",
    imagen: "hq720",
    titulo: "La historia completa de JavaScript",
    canal: "EDteam",
    texto:
      "Netscape, el navegador que hizo que la web llegase a todo el mundo, quería que las páginas web dejaran de ser estáticas, por eso en 1995 le confió a Brendan Eich la creación de un lenguaje que diera vida a la web. ",
    categoria: "JavaScript",
    etiqueta: "",
  },
  {
    idVideo: "lVqHiTCIRQg",
    imagen: "hq720",
    titulo: "Javascript para Aprender React",
    canal: "Fazt",
    texto:
      "Este es un curso de conceptos fundamentales de Javascript que debes conocer para poder aprender React, la biblioteca de Javascript para crear interfaces de Usuario en la web.",
    categoria: "JavaScript",
    etiqueta: "",
  },
  {
    idVideo: "U329pKWKqWw",
    imagen: "hq720",
    titulo: "Consejo: Aprende a Documentar tu Código Javascript | JSDoc",
    canal: "FalconMasters",
    texto: "JSDoc, una herramienta para generar documentación muy fácilmente.",
    categoria: "JavaScript",
    etiqueta: "",
  },
  {
    idVideo: "GUTt0qKUDyU",
    imagen: "hq720",
    titulo: "CONSEJO: Estas usando mal los Event Listeners en Javascript !!!",
    canal: "FalconMasters",
    texto:
      "Aprender javascript, para optimizar mas su código mediante delegación de eventos..",
    categoria: "JavaScript",
    etiqueta: "",
  },
  {
    idVideo: "DG4obitDvUA",
    imagen: "hq720",
    titulo: "JavaScript Template Literals: JSON to HTML",
    canal: "Brad Schiff",
    texto:
      "Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.",
    categoria: "JavaScript",
    etiqueta: "",
  },
  {
    idVideo: "DgunJ2jMZwM",
    imagen: "hq720",
    titulo:
      "Javascript - Fetch y Filtrado de Datos (Ejemplo práctico usando Replit)",
    canal: "Fazt Code",
    texto:
      "crear una aplicacion frontend basada en HTML, CSS y Javasscript puro, que nos permita solicitar 1000 datos de usuarios y poder filtrarlos usando el metodo filter de los arrays de Javascript.",
    categoria: "JavaScript",
    etiqueta: "",
  },
  /**Git */
  {
    idVideo: "VdGzPZ31ts8",
    imagen: "hq720",
    titulo: "Aprende GIT ahora! curso completo GRATIS desde cero",
    canal: "HolaMundo",
    texto: "Instalación, configuración y prácticas con Git Bash y GitHub ",
    categoria: "Git",
    etiqueta: "",
  },
  /*Nodejs*/
  {
    idVideo: "i3OdKwuBjeM",
    imagen: "hq720",
    titulo: "Nodejs Curso Práctico desde Cero (Javascript en el Backend)",
    canal: "Fazt",
    texto:
      "Este es un curso de nodejs enfocado en desarrolladores web Frontend principiantes que ya conocen Javascript y HTML, y ahora quieren empezar con su primer lenguaje de backend.",
    categoria: "NodeJS",
    etiqueta: "",
  },
  {
    idVideo: "1hpc70_OoAg",
    imagen: "hq720",
    titulo: "Aprende Node.js y Express - Curso desde Cero",
    canal: "freeCodeCamp Español",
    texto:
      "Aprende los fundamentos de Node.js y Express paso a paso en este curso de 8.5 horas desde cero. Practica con un proyecto práctico y ejemplos. El curso incluye los conceptos básicos de desarrollo web back-end, JavaScript asíncrono, npm, módulos de Node.js, JSON, HTTP y mucho más.",
    categoria: "NodeJS",
    etiqueta: "",
  },
  /*react*/
  {
    idVideo: "rLoWMU4L_qE",
    imagen: "hq720",
    titulo: "Curso de Reactjs desde Cero para principiantes 2022",
    canal: "Fazt",
    texto:
      "React es una biblioteca de Javascript para crear interfaces web de usuario, tipicamente se usa para crear aplicaciones web frontend.",
    categoria: "React",
    etiqueta: "",
  },
  {
    idVideo: "6Jfk8ic3KVk",
    imagen: "hq720",
    titulo: "Aprende React Desde Cero - Curso de React Con Proyectos",
    canal: "freeCodeCamp Español",
    texto:
      "Aprende los fundamentos de React en este curso desde cero. Crearás cuatro proyectos paso a paso y aprenderás los fundamentos para comenzar a crear aplicaciones web interactivas con React.",
    categoria: "React",
    etiqueta: "",
  },
  {
    idVideo: "4AFOCAgywLc",
    imagen: "hq720",
    titulo:
      "REACT ⚛️ CURSO Práctico DESDE CERO - Desarrolla una app con React.js PASO A PASO",
    canal: "Carlos Azaustre - Aprende JavaScript",
    texto:
      "Curso práctico de React.js desde cero. Desarrollamos una aplicación web paso a paso. explicando conceptos y tips para tu día a día como programador con JavaScript y React.",
    categoria: "React",
    etiqueta: "",
  },
  {
    idVideo: "KxElD42SHD0",
    imagen: "hq720",
    titulo:
      "React.js desde cero 🚀 - P1: Template literals, arrow functions, destructuring, import/export...",
    canal: "vamosacodear",
    texto:
      "En este video vemos: Repaso de JavaScript para conocer React, Template literals,  arrow functions, destructuring, import/export, spread y rest operators, default parameters y más!",
    categoria: "React",
    etiqueta: "",
  },
  {
    idVideo: "Dorf8i6lCuk",
    imagen: "hq720",
    titulo:
      "React Crash Course for Beginners 2021 - Learn ReactJS from Scratch in this 100% Free Tutorial!",
    canal: "Academind",
    texto:
      "Get Started with React.js and learn how to build amazing websites with ReactJS! Full Project included, 100% free!",
    categoria: "React",
    etiqueta: "",
  },
  {
    idVideo: "bMknfKXIFA8",
    imagen: "hq720",
    titulo:
      "React Course - Beginner's Tutorial for React JavaScript Library [2022]",
    canal: "freeCodeCamp.org",
    texto:
      "Learn React by building eight real-world projects and solving 140+ coding challenges.",
    categoria: "React",
    etiqueta: "",
  },
  /**Tools */
  {
    idVideo: "bp_IXqYRgYw",
    imagen: "hq720_2",
    titulo: "Recursos para mejorar tus páginas web",
    canal: "Midudev",
    texto: `
            <a href='https://joshwcomeau.com/shadow-palette' target='_blank'>
                Sombras:</a> Shadow Palete Generator.<br>
            <a href='https://bennettefeely.com/clippy' target='_blank'> 
                Clippy:</a> Darle forma a tus imagenes.<br> 
            <a href='https://cssloaders.github.io' target='_blank'>
                CSSLoaders:</a> Reindicadores de Carga.<br>
            <a href='https://designgradients.com' target='_blank'>
                Design Gradients:</a> Fondos degradados.
                `,
    categoria: "Tools",
    etiqueta: "",
  },
  /**Bootcamp */
  {
    idVideo: "aacwoizx1nc",
    imagen: "hq720",
    titulo:
      "Este es el MEJOR bootcamp de habla hispana (para aprender a programar)",
    canal: "Programador X",
    texto:
      '<a href="https://www.academia-x.com" target="_blank">bootcamp"</a> Contiene todos los conocimientos de programación web que tienen Ingenieros de Software en Google, Amazon, Meta, y Apple. ',
    categoria: "Bootcamp",
    etiqueta: "",
  },
  /**Proyectos HTML CSS JavaScript*/
  {
    idVideo: "HtunPQtr-Xw",
    imagen: "hq720",
    titulo:
      "5 HTML, CSS & JS Mini Projects - Scroll Animation, Rotating Navigation, Drag Events, etc",
    canal: "Traversy Media",
    texto:
      "5 projects from my 50 Projects In 50 Days course on Udemy. These projects are meant to sharpen your CSS skills and help you work with the DOM using JavaScript.",
    categoria: "Proyectos",
    etiqueta: "",
  },
  {
    idVideo: "EWv2jnhZErc",
    imagen: "hq720",
    titulo:
      "HTML CSS JS projects (Beginner): 16 projects using HTML CSS and JavaScript",
    canal: "JavaScript King",
    texto:
      "16 HTML CSS JavaScript projects for beginners. n this video, you are going to learn 16 beginners projects in HTML CSS JavaScript that are enjoyable to work on. Develop your HTML skills and use them to build modern websites with HTML CSS and JS, including HTML5, CSS3, and JavaScript 2022.",
    categoria: "Proyectos",
    etiqueta: "",
  },
  {
    idVideo: "DzSLUdJWrEQ",
    imagen: "hq720",
    titulo:
      "HTML CSS JavaScript projects",
    canal: "Code With Sahand",
    texto:
      "Beginner-friendly projects in HTML, CSS, and JavaScript. You are going to learn 11 beginner projects in HTML, CSS, and JavaScript that are fun to work on throughout the course of watching this video.",
    categoria: "Proyectos",
    etiqueta: "",
  },
  /**Portafolio */
  {
    idVideo: "X-bPSOCFM5U",
    imagen: "hq720",
    titulo: "Cómo crear un portafolio de UX y UI para ser contratado | Platzi",
    canal: "Platzi | Freddy Vega",
    texto:
      "Cómo utilizar la UX (User eXperience) y UI (User Interface) para incrementar tu valor como desarrollador web.",
    categoria: "Portafolio",
    etiqueta: "",
  },
  {
    idVideo: "aouDQ8caJYg",
    imagen: "hq720",
    titulo: "Construye un portafolio de desarrollo web",
    canal: "HolaMundo | Nicolas Schurmann",
    texto: "Construye un portafolio de desarrollo",
    categoria: "Portafolio",
    etiqueta: "",
  },
  {
    idVideo: "YbkfXduo5vo",
    imagen: "hq720",
    titulo: "¿Cómo construir tu PORTAFOLIO?",
    canal: "Programador X | Xavier Reyes Ochoa",
    texto:
      "Analizo el diseño y el contenido para darte toda la información que necesitas para llevarlo a una entrevista de trabajo de empresas interesadas en tus habilidades o presentarlo a nuevos clientes si trabajas independientemente o como freelancer.",
    categoria: "Portafolio",
    etiqueta: "",
  },
  {
    idVideo: "s8XkgcxAagU",
    imagen: "hq720",
    titulo: "Revisamos portfolios y proyectos frontend en React #1",
    canal: "Gonzalo Pozzo",
    texto:
      "Revisamos casi 50 portfolios y proyectos de la comunidad en vivo, también dimos difusión a publicaciones de LinkedIn para dar visibilidad a quienes buscan su primer trabajo!",
    categoria: "Portafolio",
    etiqueta: "",
  },
  {
    idVideo: "24gjkZ69wOE",
    imagen: "hq720",
    titulo: "Revisamos portfolios y proyectos frontend en React #2",
    canal: "Gonzalo Pozzo",
    texto: "Revisamos portfolios y proyectos de la comunidad en vivo.",
    categoria: "Portafolio",
    etiqueta: "",
  },
  /**Trabajos */
  {
    idVideo: "UgqnRtQgTCI",
    imagen: "hq720",
    titulo: "Cómo conseguir trabajo en la industria Tech",
    canal: "Platzi | Freddy Vegas",
    texto:
      "Aprende cómo conseguir empleo en la industria tech. Sin importar tu área de interés aprenderás a trazar una ruta profesional que te ayude a encontrar ese trabajo de tus sueños.",
    categoria: "Trabajos",
    etiqueta: "",
  },
  {
    idVideo: "aJjrsHhv1OE",
    imagen: "hq720",
    titulo: "Los 4 caminos para crecer después de tu primer empleo",
    canal: "Platzi",
    texto:
      "Conoce las habilidades que te darán un mejor salario o un mejor empleo.",
    categoria: "Trabajos",
    etiqueta: "",
  },
  {
    idVideo: "wFu8r9DZNZw",
    imagen: "hq720",
    titulo:
      "Trabaja como programador en el extranjero con @HolaMundo 🔴 HackerLIVE#15",
    canal: "MoureDev by Brais Moure",
    texto:
      "¿Cómo conseguir trabajo de programador en el extranjero? Nicolás Schürmann dejó Chile para emigrar a Nueva Zelanda tras conseguir trabajo de ingeniero de software en un país completamente nuevo.",
    categoria: "Trabajos",
    etiqueta: "",
  },
  {
    idVideo: "Rgojq9clGh0",
    imagen: "hq720",
    titulo: "¿Cómo conseguir trabajo de desarrollador frontend? ",
    canal: "Gonzalo Pozzo",
    texto:
      "Experiencias y realidades desde empezar a aprender hasta conseguir trabajo.",
    categoria: "Trabajos",
    etiqueta: "",
  },
  {
    idVideo: "enzWAM4Eh3Q",
    imagen: "hq720",
    titulo: "CÓMO BUSCAR TRABAJO en REMOTO como DESARROLLADOR",
    canal: "Carlos Azaustre - Aprende JavaScript",
    texto:
      " ¡Apúntate como Arc Featured Developer y consigue tu nuevo empleo en remoto como Desarrollador!",
    categoria: "Trabajos",
    etiqueta: "",
  },
  {
    idVideo: "zJSY8tbf_ys",
    imagen: "hq720",
    titulo: "Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS)",
    canal: "freeCodeCamp.org",
    texto:
      "Aprende JavaScript, HTML y CSS en este curso de Desarrollo Web Frontend. En este curso masivo, pasará de no tener experiencia en codificación a tener las habilidades esenciales de un desarrollador web frontend. ",
    categoria: "BootCamp",
    etiqueta: "",
  },
  {
    idVideo: "52q6OGbcIso",
    imagen: "hq720",
    titulo: "CREA esta APP usando HTML + CSS + JAVASCRIPT + JSON",
    canal: "CodingTube",
    texto:
      "Obtener datos, definir, leer y acceder a un archivo JSON JavaScript",
    categoria: "Proyectos y Retos",
    etiqueta: "",
  },
  /*Desarrollo Web*/
  {
    idVideo: "_YwKSdtWr0Q",
    imagen: "hq720",
    titulo: "Sitios Web Asombrosos",
    canal: "Fazt",
    texto:
      "Sitios de HTML, CSS y JavaScript de grado profesional para inspirarte.",
    categoria: "Desarrollo Web",
    etiqueta: "",
  },
  {
    idVideo: "ExsGyZDBlJQ",
    imagen: "hq720",
    titulo: "La ruta para aprender desarrollo web profesional",
    canal: "Platzi",
    texto:
      "Desarrolla tu propia página web o trabaja como web developer creando con HTML5, CSS3 y JavaScript.",
    categoria: "Desarrollo Web",
    etiqueta: "",
  },
  {
    idVideo: "QOiE6amc6JA",
    imagen: "hq720",
    titulo: "Recursos para desarrolladores y programadores",
    canal: "Fazt",
    texto:
      "Lista enorme de sitios o páginas web que utilizo cuando desarrollo aplicaciones webs y programas en general.",
    categoria: "Desarrollo Web",
    etiqueta: "",
  },
];


