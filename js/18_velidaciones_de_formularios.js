const d = document;

export default () => {
  const $form = d.querySelector(".contact-form");
  const $input = d.querySelectorAll(".contact-form *[required]");

  // por cada input crear un mensaje de error
  $input.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  // verificar por cada tecla pulsada el input
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form *[required]")) {
      // oobtener el elemento y el patron
      let $input = e.target;
      let pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        // validar y retornar si cumple con el patron
        // añadiendo la clase is-active
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
      if (!pattern) {
        return $input.value == ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();

    const $loader = d.querySelector(".contact-form-loader");
    const $response = d.querySelector(".contact-form-response");
    setTimeout(() => $loader.classList.remove("none"), 300);

    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();
      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  });
};
