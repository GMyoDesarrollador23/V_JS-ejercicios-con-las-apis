const d = document;

export default () => {
  // obtener la referencia a los elementos
  const $nextBtn = d.querySelector(".slider-btns .next");
  const $prevtBtn = d.querySelector(".slider-btns .prev");
  const $slides = d.querySelectorAll(".slider-slide");

  // constador del slide
  let i = 0;

  d.addEventListener("click", (e) => {
    // comportamienos de los botones
    if (e.target === $prevtBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;
      if (i < 0) i = $slides.length - 1;
      $slides[i].classList.add("active");
    }

    if (e.target === $nextBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;
      if (i > $slides.length - 1) i = 0;
      $slides[i].classList.add("active");
    }
  });
};
