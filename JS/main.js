// * GLOBAL VARIABLES

let gameIntro = document.querySelector("#game-intro");
let gameOverScreen = document.querySelector("#gameover-screen")
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d")
let newGame;
//let loseBtn = document.querySelector("#lost-btn")


// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {

  // desaparer el game intro screen y aparecer canvas
  gameIntro.style.display = "none";
  canvas.style.display = "flex";
  //loseBtn.style.display = "flex";


  // ejecutar mi juego (aqui esta todo lo que estamos 
  newGame = new Game();
  newGame.gameLoop(); 

}

// const loseGame = () => {
//   canvas.style.display = "none";
//   loseBtn.style.display = "none";
//   gameOverScreen.style.display = "flex";
//   window.setTimeout(function(){location.reload()}, 4000);

// }

// * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn")
startButton.addEventListener("click", startGame)

document.addEventListener("keydown", (event) => {
    newGame.player.mzMovement(event);
});

// let loseBtn = document.querySelector("#lost-btn")
// loseBtn.addEventListener("click", loseGame)




