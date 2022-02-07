class Balls {

  constructor () {
    // properties
    this.x = canvas.width/2;
    this.y = -20;
    this.directionX = 1;
    this.directionY = 1;
    this.width = 50;
    this.height = 50;
    this.imgBall = new Image();
    this.imgBall.src = "./Images/brown_ball.png"
  }

  // Methods

  // 1. Draw
  drawBigBalls = () => {

    ctx.drawImage(this.imgBall, this.x, this.y, this.width, this.height)

    // ctx.beginPath()
    // ctx.fillStyle = "blue"
    // ctx.arc(this.X, this.Y, 50, 0, 2 * Math.PI )
    // ctx.fill()
    // ctx.stroke()
    // ctx.closePath() 
  }

  // 2. Movement
  
  ballsMovement = () => {
    
    this.x = this.x + (1 *this.directionX);
    
    this.y = this.y + (1 *this.directionY);
    
  }
  
}