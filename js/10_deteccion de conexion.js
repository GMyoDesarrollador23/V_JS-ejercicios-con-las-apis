const d = document;
const w = window;
const n = navigator;

export default () => {
  // verificar si esta online o offline
  const isOnline = () => {
    const $div = d.createElement("div");
    if (n.onLine) {
      $div.textContent = "Coneccion restablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Coneccion perdoda";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }

    // despues de 2 segundo remueve le mensaje
    d.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => {
      d.body.removeChild($div);
    }, 2000);
  };

  // se disparan cuando elestado de la red cambia
  w.addEventListener("online", (e) => isOnline());
  w.addEventListener("offline", (e) => isOnline());
};
