/* LUZ QUE SIGUE EL CURSOR */

const cursorLight =
  document.querySelector(".cursor-light");


document.addEventListener(
  "mousemove",
  (event) => {

    if (!cursorLight) {
      return;
    }

    cursorLight.style.left =
      event.clientX + "px";

    cursorLight.style.top =
      event.clientY + "px";

  }
);



/* APARICIÓN AL HACER SCROLL */

const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target
              .classList
              .add("visible");

          }

        }
      );

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach(
  (element) => {

    observer.observe(element);

  }
);



/* CONCEPTOS SOBRE MÍ */

const conceptInformation = {


  forma: {

    title:
      "FORMA",

    text:
      "La configuración visible y material mediante la cual una idea de diseño adquiere presencia."

  },


  materia: {

    title:
      "MATERIA",

    text:
      "El material como parte activa del proceso de diseño, considerando sus cualidades, límites y posibilidades constructivas."

  },


  experiencia: {

    title:
      "EXPERIENCIA",

    text:
      "La relación que se construye entre una persona, un objeto y el contexto en el que ocurre una interacción."

  },


  movimiento: {

    title:
      "MOVIMIENTO",

    text:
      "La transformación de una forma o sistema a través del tiempo, mediante mecanismos, acciones corporales o respuestas interactivas."

  }


};



const conceptButtons =
  document.querySelectorAll(
    ".concept-button"
  );


const conceptDescription =
  document.querySelector(
    "#concept-description"
  );


const conceptTitle =
  document.querySelector(
    "#concept-title"
  );


const conceptText =
  document.querySelector(
    "#concept-text"
  );



conceptButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {


        const concept =
          button.dataset.concept;


        const information =
          conceptInformation[
            concept
          ];


        conceptButtons.forEach(
          (item) => {

            item.classList.remove(
              "active"
            );

          }
        );


        button.classList.add(
          "active"
        );


        conceptTitle.textContent =
          information.title;


        conceptText.textContent =
          information.text;


        conceptDescription
          .classList
          .remove("change");


        void
          conceptDescription
            .offsetWidth;


        conceptDescription
          .classList
          .add("change");


      }
    );

  }
);



/* NAVEGACIÓN SEGÚN SCROLL */

const sections =
  document.querySelectorAll(
    "section, header"
  );


const navigationLinks =
  document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );



window.addEventListener(
  "scroll",
  () => {


    let currentSection =
      "";


    sections.forEach(
      (section) => {


        const sectionTop =
          section.offsetTop - 220;


        if (
          window.scrollY >=
          sectionTop
        ) {

          currentSection =
            section.getAttribute(
              "id"
            );

        }

      }
    );


    navigationLinks.forEach(
      (link) => {


        link.classList.remove(
          "active"
        );


        if (

          link.getAttribute(
            "href"
          ) ===
          "#" + currentSection

        ) {

          link.classList.add(
            "active"
          );

        }

      }
    );


  }
);



/* MOVIMIENTO DE TARJETAS */

const cards =
  document.querySelectorAll(
    ".interest-card"
  );



cards.forEach(
  (card) => {


    card.addEventListener(
      "mousemove",
      (event) => {


        const rect =
          card
            .getBoundingClientRect();


        const x =
          event.clientX -
          rect.left;


        const y =
          event.clientY -
          rect.top;


        const centerX =
          rect.width / 2;


        const centerY =
          rect.height / 2;


        const rotateX =
          (y - centerY) / 35;


        const rotateY =
          (centerX - x) / 35;


        card.style.transform =
          `
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-8px)
          `;

      }
    );


    card.addEventListener(
      "mouseleave",
      () => {

        card.style.transform =
          "";

      }
    );


  }
);



/* MOVIMIENTO DEL MAPA */

const mapCard =
  document.querySelector(
    ".map-card"
  );


if (mapCard) {


  mapCard.addEventListener(
    "mousemove",
    (event) => {


      const rect =
        mapCard
          .getBoundingClientRect();


      const x =
        event.clientX -
        rect.left;


      const y =
        event.clientY -
        rect.top;


      const centerX =
        rect.width / 2;


      const centerY =
        rect.height / 2;


      const moveX =
        (x - centerX) / 80;


      const moveY =
        (y - centerY) / 80;


      const map =
        mapCard.querySelector(
          ".chile-map"
        );


      map.style.transform =
        `
        translate(
          ${moveX}px,
          ${moveY}px
        )
        `;

    }
  );


  mapCard.addEventListener(
    "mouseleave",
    () => {


      const map =
        mapCard.querySelector(
          ".chile-map"
        );


      map.style.transform =
        "translate(0, 0)";


    }
  );


}
