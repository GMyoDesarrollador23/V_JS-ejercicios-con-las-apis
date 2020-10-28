const d = document;

const countdown = (id, limitDate, finalMessage) => {
  const $countDown = d.getElementById(id);

  // comvetir a la fecha limite en milisegundos
  const countDownTime = new Date(limitDate).getTime();

  // actualizar la fecha regresiva cada segundo
  let countDownTempo = setInterval(() => {
    let now = new Date().getTime();
    let limitTime = countDownTime - now;

    // ****************************************
    // calcular los dias meses minutos y segundos
    // ****************************************

    let days = Math.floor(limitTime / (1000 * 3600 * 24));

    let hours = (
      "0" + Math.floor((limitTime % (1000 * 3600 * 24)) / (1000 * 3600))
    ).slice(-2);

    let minutes = (
      "0" + Math.floor((limitTime % (1000 * 3600)) / (1000 * 60))
    ).slice(-2);

    let seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(
      -2
    );

    // mostrar mensaje en el documento
    $countDown.innerHTML = `<h3>Faltan: ${days} dias, ${hours} horas: ${minutes} minutos y ${seconds} segundos </h3>`;

    // detener el temporizador y mostrar un mensaje por pantalla
    if (limitTime < 0) {
      clearInterval(countDownTempo);
      $countDown.innerHTML = `<h3>Faltan: ${finalMessage} </h3>`;
    }
  }, 1000);
};

export default countdown;
