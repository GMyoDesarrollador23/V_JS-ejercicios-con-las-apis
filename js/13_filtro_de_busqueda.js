const d = document;

export default (input, selector) => {
  // evento que escucha las pulsaciones del techado
  d.addEventListener("keyup", (e) => {
    // si el objeto del evento es el mismo que del input
    if (e.target.matches(input)) {
      // limpiando el input con la tecla escape
      e.key === "Escape" ? (e.target.value = "") : null;

      // obtener las targetas
      const $cards = d.querySelectorAll(selector);

      // filtar el contnido del texto por cada elemento
      $cards.forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
};
