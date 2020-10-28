const d = document;
const n = navigator;

export default async (id) => {
  const $video = d.getElementById(id);

  // si tiene la propiedad n.mediaDevices.getUserMedia
  if (n.mediaDevices.getUserMedia) {
    try {
      // obteniendo el objeto de los parametros de la camara
      const mediaStream = await n.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      // enviando el objeto a la etiqueta del video
      $video.srcObject = mediaStream;
      // reproducir el stream
      $video.play();

    } catch (e) {
      // mostrar el posible error que suceda
      $video.insertAdjacentHTML("beforebegin", `<p><mark>${e}</mark></p>`);
    }

    // n.mediaDevices
    //   .getUserMedia({ video: true, audio: false })
    //   .then((stream) => {
    //     console.log(stream);
    //     $video.srcObjet = stream;
    //     $video.play();

    //     // const mediaSource = new MediaSource();
    //     // const video = document.createElement("video");
    //     // video.srcObject = mediaSource;
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });
  }
};
