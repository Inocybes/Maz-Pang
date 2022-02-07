class Game {

  constructor() {
    //Game properties
   
    this.bg = new Image();
    this.bg.src = "./images/background.png";
    this.player = new Player();
    
  }

  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
  }

  cleanCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  // methods

  gameLoop = () => {

    // 1, Clean canvas
    this.cleanCanvas();
    // 2. move elements or other actions

    // 3.  Draw los elements
    this.drawBackground();
    this.player.drawPlayer();

    // 4. Animation recursion 
    requestAnimationFrame(this.gameLoop);


  }

}