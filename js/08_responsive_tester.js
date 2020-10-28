const d = document;
const w = window;
export const responsiveTester = (form) => {
  const $form = d.getElementById(form);
  let tester;
  // console.log($form.direccion);
  // console.log($form.ancho);

  // abrir la ventana
  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();

      // abrir l ventana co los parametros
      tester = w.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value},
        innerHeight=${$form.alto.value}`
      );
    }
  });

  // cerrar ventana
  d.addEventListener(
    "click",
    (e) => e.target === $form.cerrar && tester.close()
  );
};
