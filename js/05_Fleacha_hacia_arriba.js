const d = document;
const w = window;

const scrollTopButton = (btn) => {
  const $scrollBtn = d.querySelector(btn);

  // escucha el cambio del scroll
  w.addEventListener("scroll", () => {
    // obteniendo el valor del scroll
    let scrolltop = w.pageYOffset || d.documentElement.scrollTop;

    // activar/desctivar el boton segun el scroll
    scrolltop > 600
      ? $scrollBtn.classList.remove("hidden")
      : $scrollBtn.classList.add("hidden");

    // console.log(w.pageYOffset, d.documentElement.scrollTop);
  });

  // evento click
  d.addEventListener("click", (e) => {
    // navegar al principio de la pagina
    e.target.matches(btn) &&
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
  });
};

export default scrollTopButton;
