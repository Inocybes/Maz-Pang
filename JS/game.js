class Game {

  constructor() {
    //Game properties
   
    this.bg = new Image();
    this.bg.src = "./images/background.png";
    this.player = new Player();
    this.balls = new Balls()
    this.ballCollision = 75
    
  }

  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
  }

  ballsCanvasCollision = () => {
    if ( this.balls.X > canvas.width - this.ballCollision) {
      this.balls.DirectionX = - 1;
      
    } else if ( this.balls.Y > canvas.height - this.ballCollision) {
      this.balls.DirectionY = - 1;

    } else if (this.balls.X < 0 + this.ballCollision) {
      this.balls.DirectionX = 1;
      
    } else if ( this.balls.Y < 0 +this.ballCollision) {
      this.balls.DirectionY = 1;
    }
  
  }

  cleanCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  // methods

  gameLoop = () => {

    // 1, Clean canvas
    this.cleanCanvas();
    // 2. move elements or other actions
    
    this.balls.ballsMovement();
    this.ballsCanvasCollision();


    // 3.  Draw los elements
    this.drawBackground();
    this.player.drawPlayer();
    this.balls.drawBalls();
    
    // 4. Animation recursion 
    requestAnimationFrame(this.gameLoop);


  }

}