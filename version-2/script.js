/* CONCEPTOS */

const conceptInformation = {

  forma: {
    title: "FORMA",
    text:
      "La configuración visible y material mediante la cual una idea de diseño adquiere presencia."
  },

  materia: {
    title: "MATERIA",
    text:
      "El material como parte activa del proceso, considerando sus cualidades, límites y posibilidades constructivas."
  },

  experiencia: {
    title: "EXPERIENCIA",
    text:
      "La relación que se genera entre una persona, un objeto y el contexto en el que ocurre una interacción."
  },

  movimiento: {
    title: "MOVIMIENTO",
    text:
      "La transformación de una forma o sistema a través del tiempo mediante mecanismos, acciones o respuestas interactivas."
  }

};


const conceptPanels =
  document.querySelectorAll(
    ".concept-panel"
  );


const conceptTitle =
  document.querySelector(
    "#concept-title"
  );


const conceptText =
  document.querySelector(
    "#concept-text"
  );


conceptPanels.forEach(
  (panel) => {

    panel.addEventListener(
      "click",
      () => {

        const concept =
          panel.dataset.concept;

        const info =
          conceptInformation[
            concept
          ];

        conceptPanels.forEach(
          (item) => {
            item.classList.remove(
              "active"
            );
          }
        );

        panel.classList.add(
          "active"
        );

        if (
          conceptTitle &&
          conceptText
        ) {

          conceptTitle.textContent =
            info.title;

          conceptText.textContent =
            info.text;

        }

      }
    );

  }
);


/* MOVIMIENTO DE TARJETAS */

const cards =
  document.querySelectorAll(
    ".project-chunky"
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
          (y - centerY) / 45;

        const rotateY =
          (centerX - x) / 45;

        card.style.transform =
          `
          perspective(850px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translate(-4px, -4px)
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

const travelRight =
  document.querySelector(
    ".travel-right"
  );


if (travelRight) {

  const map =
    travelRight.querySelector(
      ".chile-map"
    );


  travelRight.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        travelRight
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
        (x - centerX) / 70;

      const moveY =
        (y - centerY) / 70;

      map.style.transform =
        `
        translate(
          ${moveX}px,
          ${moveY}px
        )
        `;

    }
  );


  travelRight.addEventListener(
    "mouseleave",
    () => {
      map.style.transform =
        "translate(0, 0)";
    }
  );

}
