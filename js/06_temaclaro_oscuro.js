const d = document;
const ls = localStorage;

const darkTheme = (btn, classDark) => {
  const $themeBtn = d.querySelector(btn);

  // obtener todos los atributos de data-dark
  const $selector = d.querySelectorAll("[data-dark]");

  // variable de luna y sol
  let moon = "🌙";
  let sun = "🌞";

  // modo claro
  const lightMode = () => {
    $selector.forEach((e) => {
      e.classList.remove(classDark);
      $themeBtn.textContent = moon;
      ls.setItem("theme", "light");
    });
  };

  // modo oscuro
  const darkMode = () => {
    $selector.forEach((e) => {
      e.classList.add(classDark);
      $themeBtn.textContent = sun;
      ls.setItem("theme", "dark");
    });
  };

  //*************************************** */
  //************ cambiar de tema ************
  //*************************************** */
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      $themeBtn.textContent === moon ? darkMode() : lightMode();
    }
  });

  //*************************************** */
  //obtener del localStorage el estado del tema
  //*************************************** */
  d.addEventListener("DOMContentLoaded", () => {
    !ls.getItem("theme") && ls.setItem("theme", "light");
    ls.getItem("theme") === "light" && lightMode();
    ls.getItem("theme") === "dark" && darkMode();
  });
};

export default darkTheme;
