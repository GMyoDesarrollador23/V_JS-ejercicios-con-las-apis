export default (panelBtn, panel, menuLink) => {
  const d = document;
  d.addEventListener("click", (e) => {

    // si el evento conside con el elemento del panelBtn
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
    // si hace   hace click en algun enlace oculta el panel
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
};
