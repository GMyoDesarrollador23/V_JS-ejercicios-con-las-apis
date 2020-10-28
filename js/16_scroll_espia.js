const d = document;

export default () => {
  // seleccionar todos los elementos con los atributos personalizados
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      // obteniendo el atributo del elemento
      const id = entry.target.getAttribute("id");

      // console.log(entry.isIntersecting);

      let elemeto = d.querySelector(`a[data-scroll-spy][href="#${id}"]`);

      // si el elemento esta intersectado
      entry.isIntersecting
        ? elemeto.classList.add("active")
        : elemeto.classList.remove("active");
    });
  };

  // creando el objeto obsevador
  const observer = new IntersectionObserver(cb, {
    // root:
    // rootMargin: "-250px",
    threshold: [0.45, 0.7],
  });

  // asignando el observer a todos los elementos
  $sections.forEach((el) => {
    observer.observe(el);
  });
};
