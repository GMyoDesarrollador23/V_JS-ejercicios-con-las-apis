// *************menu de haburgesa*************
import hamburguerMenu from "./01_hamburgesa.js";

// *************relog y alarma*************
import { digitalClock, alarm } from "./02_Reloj_alarma.js";

// ***********eventos del teclado***********
import { shoctcuts, moveBall } from "./03_Eventos_teclado.js";

// ***********Cuenta Regresiva***********
import countdown from "./04_Cuenta_Regrasiva.js";

// ***********Flecha hacia arriba***********
import scrollTopButton from "./05_Fleacha_hacia_arriba.js";

// ****************tema oscuro****************
import darkTheme from "./06_temaclaro_oscuro.js";

// ****************Responsive en js****************
import { responsiveMedia } from "./07_responsiveJs.js";

// ****************Responsive tester****************
import { responsiveTester } from "./08_responsive_tester.js";

// ****************Deteciion de dispositivos****************
import { userDeviceInfo } from "./09_deteccion_dispositivos.js";

// ****************deteccion de si hay o no internet****************
import newWorkstatus from "./10_deteccion de conexion.js";

// ****************deteccion de si hay o no internet****************
import webCam from "./11_deteccion_de_camara.js";

// *************************Geolocalizacion*************************
import getGeolication from "./12_Geolocalizacion.js";

// *************************fitros de busqueda*************************
import searchFilter from "./13_filtro_de_busqueda.js";

// *************************sorteo Digital*************************
import draw from "./14_sorteo_digital.js";

// **********************Carusel**********************
import slider from "./15_carrusel.js";

// *******************Scroll espia*******************
import scrollSpy from "./16_scroll_espia.js";

// *******************Scroll espia*******************
import smartVideo from "./17_video_inteligente.js";

// *******************Validacion de formulario*******************
import contactFormValidation from "./18_velidaciones_de_formularios.js";

// *******************Narrado de voz*******************
import speechReader from "./19_narrador_de_voz.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  /*
    
    
    */
  // ****************************************
  // ***************Hamburgesa***************
  // ****************************************
  hamburguerMenu(".panel-btn", ".panel", "a");
  /*
    
    
    */
  // ****************************************
  // *************relog y alarma*************
  // ****************************************
  digitalClock("#reloj", "#activar-relo", "#desactivar-reloj");
  alarm("../assets/alarma.mp3", "activar-alarma", "desactivar-alarma");
  /*
  
  
  */
  // ****************************************
  // ************cuenta regresiva************
  // ****************************************
  countdown("countdown", "May 09, 2021 03:12:05", "insete mensaje aqui...");
  /*
  
  
  */
  // ****************************************
  // ************Boton de ar arriba************
  // ****************************************
  scrollTopButton(".scroll-top-btn");
  /*
  
  
  */
  // ****************************************
  // ********responsive con javaScript********
  // ****************************************
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href = "https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" target= "_black">Ver video</a>`,

    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href = "https://goo.gl/maps/En75Z68hM8vtJkKS8" target= "_black">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1917067.7763180993!2d-68.71333938539281!3d-20.205973580459826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915584b325e18bd7%3A0xce4183a158278b6!2sSalar%20de%20Uyuni!5e0!3m2!1ses!2sbo!4v1602106146349!5m2!1ses!2sbo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  );

  /*
  
  
  */
  // ****************************************
  // ***********responsive tester***********
  // ****************************************
  responsiveTester("responsive-tester");
  /*
  
  
  */
  // ****************************************
  // *******deteccion de dispositivos*******
  // ****************************************
  userDeviceInfo("user-device");
  /*
  
  
  */
  // ****************************************
  // ***********deteccion de camara***********
  // ****************************************
  webCam("webcam");
  /*
  
  
  */
  // ****************************************
  // ***********Geolocalizacion***********
  // ****************************************
  getGeolication("geolocation");
  /*
  
  
  */
  // ****************************************
  // ***********fitro de busquedas***********
  // ****************************************
  searchFilter(".card-filter", ".card");
  /*
  
  
  */
  // ****************************************
  // *************Sorteo digital*************
  // ****************************************
  draw("#winnwe-btn", ".player");
  /*
  
  
  */
  // ****************************************
  // ****************carusel****************
  // ****************************************
  slider();
  /*
  
  
  */
  // ****************************************
  // *************scroll espia*************
  // ****************************************
  scrollSpy();
  /*
  
  
  */
  // ****************************************
  // ***********video inteligente***********
  // ****************************************
  smartVideo();
  /*
  
  
  */
  // ****************************************
  // ********Validacio de formulario********
  // ****************************************
  contactFormValidation();
});
/*


*/
// ****************************************
// ************tema oscuro claro************
// ****************************************
darkTheme(".dark-theme-btn", "dark-mode");

/*
  
  
  */
// ****************************************
// *********deteccion de internet*********
// ****************************************
newWorkstatus();

/*


*/
// ****************************************
// ***********eventos del teclado**********
// ****************************************
d.addEventListener("keydown", (e) => {
  shoctcuts(e);
  moveBall(e, ".ball", ".stage");
});

/*


*/
// ****************************************
// *************narrador de voz************
// ****************************************
speechReader();
