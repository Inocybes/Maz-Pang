class Game {

  constructor() {
    //Game properties
   
    this.bg = new Image();
    this.bg.src = "./images/background.png";
    this.player = new Player();
    this.balls = new Balls()
    //this.ballArr = [new Balls()]
    this.ballCollision = 75
    this.isGameOn = true;
    
  }

  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
  }

  ballsCanvasCollision = () => {
    if ( this.balls.x > canvas.width - 70) {
      this.balls.directionX = - 1;
      
    } else if ( this.balls.y > canvas.height - this.ballCollision) {
      this.balls.directionY = - 1;

    } else if (this.balls.x < 0 + 15) {
      this.balls.directionX = 1;
      
    } else if ( this.balls.y < 0 + 20) {
      this.balls.directionY = 1;
    }
  
  }

  // spawningPipe = () => {

  //   let lastPipe = this.pipeArr[this.pipeArr.length - 1];

  //   if (lastPipe.x < (canvas.width) - this.pipeSeparation) {
     
  //     let randomY = (Math.random() * 100) - 100 
  //     let newPipe = new Pipe(randomY, "./images/obstacle_top.png");
  //     this.pipeArr.push(newPipe);

     
  //     let randomYDown = randomY + newPipe.height + 150     
  //     let newPipeDown = new Pipe(randomYDown, "./images/obstacle_bottom.png"); 
  //     this.pipeArr.push(newPipeDown);
  //   }


  // }


  checkPlayerBallCollision = () => {
    if (this.player.x < this.balls.x + this.balls.width &&
      this.player.x + this.player.width > this.balls.x &&
      this.player.y < this.balls.y + this.balls.height &&
      this.player.height + this.player.y > this.balls.y) {
      
      //! 1. Detener Loop
      this.isGameOn = false;
      canvas.style.display = "none";
      gameOverScreen.style.display ="flex"

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
    this.checkPlayerBallCollision();


    // 3.  Draw los elements
    this.drawBackground();
    this.player.drawPlayer();
    this.balls.drawBigBalls();
    
    // 4. Animation recursion 
    requestAnimationFrame(this.gameLoop);


  }

}