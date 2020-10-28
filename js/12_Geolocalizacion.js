const d = document;
const n = navigator;

export default (id) => {
  const $id = d.getElementById(id);

  // opciones de la geolocalizacion
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  // funcion en caso de que tenga exito
  const success = (position) => {
    // obteniendo la longitud latitud y presicion
    let { latitude, longitude, accuracy } = position.coords;

    // agregando la informacion en el div
    $id.innerHTML = `
      <p>Tu posicion es: </p>
      
      <ul>
        <li>Latitud: <b>${latitude}</b></li>
        <li>Longitud: <b>${longitude}</b></li>
        <li>Longitud: <b>${longitude}</b></li>
        <li>Precision: <b>${accuracy}</b>ms</li>
      </ul>
      <a href="https://www.google.com/maps/@${latitude},${longitude},20z" target="_black" rel="noopener">Ver en google mapas</a>
      `;
  };

  // funcion en caso de que tenga un error
  const error = (e) => {
    // mostrando el error en el div
    $id.innerHTML = `<p>Error => <mark>${e.code}: ${e.message}</mark></p>`;
  };

  n.geolocation.getCurrentPosition(success, error, options);
};
