const d = document;

// ****************************************
// *********funncin de del relog *********
// ****************************************
export const digitalClock = (clock, btnPlay, btnStop) => {
  let clockTempo;
  const $btnStop = d.querySelector(btnStop);
  $btnStop.disabled = true;
  d.addEventListener("click", (e) => {
    //
    //
    // si se presiona el boton de play
    if (e.target.matches(btnPlay)) {
      // ejecutar el relog cada segundo
      clockTempo = setInterval(() => {
        // obtener la hora 
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);

      // desctivar el boton
      e.target.disabled = true;
      $btnStop.disabled = false;
    }

    // si se presiona el boton de stop
    if (e.target.matches(btnStop)) {
      //
      //
      // detener el relog
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = "";
      // avilitar el boton de play
      document.querySelector(btnPlay).disabled = false;
      $btnStop.disabled = true;
    }
  });
};

// ****************************************
// *********funncin de la alarma *********
// ****************************************
export const alarm = (sound, btnPlay, btnStop) => {
  let alarmaTempo;
  let alarma;
  const $alarm = d.createElement("audio");

  const $btnStop = d.getElementById(btnStop);
  $btnStop.disabled = true;

  // asignar la ruta del audio
  $alarm.src = sound;
  d.addEventListener("click", (e) => {
    //
    //
    // activar la alarma
    if (e.target.id === btnPlay) {
      alarmaTempo = setTimeout(() => {
        $alarm.play();
      }, 1000);

      alarma = e.target;
      // desactivar el boton
      alarma.disabled = true;
      $btnStop.disabled = false;
    }
    // detener la alarma
    if (e.target.id === btnStop) {
      clearTimeout(alarmaTempo);
      $alarm.pause();
      $alarm.currentTime = 0;
      // activar el boton de play
      alarma.disabled = false;
      $btnStop.disabled = true;
    }
  });
};
