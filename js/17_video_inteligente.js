const d = document;
const w = window;

export default () => {
  // obteniendo las etiquetas de video
  const $videos = d.querySelectorAll("video[data-smart-video]");
  const cb = (entries) => {
    entries.forEach((entry) => {
      // si el elemeto es intersectado reproduce el video
      entry.isIntersecting ? entry.target.play() : entry.target.pause();

      // pausar el video cuando cambia de pestaña
      w.addEventListener("visibilitychange", (e) =>
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };

  const observer = new IntersectionObserver(cb, { threshold: 0.5 });

  // asignando los elementos al observer
  $videos.forEach((el) => observer.observe(el));
};
