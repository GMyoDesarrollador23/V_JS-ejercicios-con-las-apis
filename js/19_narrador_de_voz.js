const d = document;
const w = window;

export default () => {
  const $speechSelected = d.getElementById("speech-select");
  const $speechTextarea = d.getElementById("speech-text");
  const $speechBtn = d.getElementById("speech-btn");

  // creando el obj para detectar las voces del os
  const speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  // cuando se carge el documento
  d.addEventListener("DOMContentLoaded", (e) => {
    // cuando carge las voces guardarlas en un array
    speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = speechSynthesis.getVoices();
      //   console.log(voices);

      // guardar cada voz en un option e insertarlo en le select
      const fracment = d.createDocumentFragment();
      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.lang} - ${voice.name}`;
        fracment.appendChild($option);
      });
      $speechSelected.appendChild(fracment);
    });
  });

  // cada vez que cambie las voz asignarle la nueva
  d.addEventListener("change", (e) => {
    if (e.target === $speechSelected) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
    // console.log(speechMessage);
  });

  // cuando presione el boton la voz lee el texto
  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextarea.value;
      w.speechSynthesis.speak(speechMessage);
    }
  });
};
