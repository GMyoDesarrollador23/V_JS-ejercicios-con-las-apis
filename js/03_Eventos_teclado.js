const d = document;
let x = 0;
let y = 0;

export const moveBall = (e, ball, stage) => {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);

  // variables que indican las codenadas de los objetos
  const limitBall = $ball.getBoundingClientRect();
  const limitStage = $stage.getBoundingClientRect();
  //   console.log(e.key);
  //   console.log(e.keyCode);
  //   console.log(limitBall, limitStage);

  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      if (limitBall.left - 5 > limitStage.left) x--;
      break;

    case 38:
      e.preventDefault();
      if (limitBall.top - 5 > limitStage.top) y--;
      break;

    case 39:
      e.preventDefault();
      if (limitBall.right + 5 < limitStage.right) x++;
      break;

    case 40:
      e.preventDefault();
      if (limitBall.bottom + 5 < limitStage.bottom) y++;
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px , ${y * 10}px)`;
};

// funcion de atajos de teclado
export const shoctcuts = (e) => {
  if (e.key === "a" && e.altKey) {
    alert("has lansado una alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("has lansado una confirmacion con el teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("has lansado un aviso con el teclado");
  }
};
