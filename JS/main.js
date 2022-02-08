// * GLOBAL VARIABLES

let gameIntro = document.querySelector("#game-intro");
let gameOverScreen = document.querySelector("#gameover-screen");
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
let newGame;

// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {

  gameIntro.style.display = "none";
  canvas.style.display = "flex";
  gameOverScreen.style.display = "none";

  newGame = new Game();
  newGame.spawningBall()
  newGame.gameLoop();
};

const playAgain = () => {
  window.location.reload();
};

// * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);

document.addEventListener("keydown", (event) => {
  newGame.player.mzMovement(event);
});

let restart = document.querySelector("#restart-btn");
restart.addEventListener("click", playAgain);
