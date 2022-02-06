// * GLOBAL VARIABLES

let gameIntro = document.querySelector("#game-intro");
let gameOverScreen = document.querySelector("#gameover-screen")
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d")
//let loseBtn = document.querySelector("#lost-btn")


// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {

  // desaparer el game intro screen y aparecer canvas
  gameIntro.style.display = "none";
  canvas.style.display = "flex";
  loseBtn.style.display = "flex";


  // ejecutar mi juego (aqui esta todo lo que estamos creando)
  //let newGame = new Game(); //al poner la variable global hay que eliminbar let
  let newGame = new Game();
    newGame.gameLoop(); 

}

const loseGame = () => {
  canvas.style.display = "none";
  loseBtn.style.display = "none";
  gameOverScreen.style.display = "flex";
  window.setTimeout(function(){location.reload()}, 4000);

}

// * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn")
startButton.addEventListener("click", startGame)

let loseBtn = document.querySelector("#lost-btn")
loseBtn.addEventListener("click", loseGame)

