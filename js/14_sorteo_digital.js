const d = document;

export default (btn, selector) => {

  
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector);

    // numero random
    const ramdom = Math.floor(Math.random() * $players.length);

    // obtener el selector de forma aleatoria
    const winner = $players[ramdom];
    
    // console.log($players, ramdom, window);

    return `El ganador el ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      // alert(result);
      // mostrar por consola en la terminal
      console.log(result);
    }
  });
};