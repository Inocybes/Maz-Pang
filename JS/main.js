// * GLOBAL VARIABLES

let gameIntro = document.querySelector("#game-intro");
this.gameOverScreen = document.querySelector("#gameover-screen")
let canvas = document.querySelector("#my-canvas");



// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {

  // desaparer el splash screen y aparecer canvas
  gameIntro.style.display = "none";
  canvas.style.display = "flex";


  // ejecutar mi juego (aqui esta todo lo que estamos creando)
  //let newGame = new Game(); //al poner la variable global hay que eliminbar let
  let newGame = new Game();
  //console.log(newGame);
  newGame(); 

}




// * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn")
startButton.addEventListener("click", startGame)



