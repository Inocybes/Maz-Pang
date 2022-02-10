// * GLOBAL VARIABLES

let gameIntro = document.querySelector("#game-intro");
let gameOverScreen = document.querySelector("#gameover-screen");
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
let newGame;
let songs = document.getElementById("songs");
let finalScore = document.getElementById("finalScore");

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  songs.play();
  songs.volume = 0.1;
  songs.loop = true;
  gameIntro.style.display = "none";
  canvas.style.display = "flex";
  gameOverScreen.style.display = "none";
  newGame = new Game();
  newGame.spawningBall(4000);
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
