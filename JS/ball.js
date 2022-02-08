class Ball {

  constructor (x, directionX) {
    // properties
    this.x = x;
    this.y = -20;
    this.directionX = directionX;
    this.directionY = 1;
    this.width = 50;
    this.height = 50;
    this.imgBall = new Image();
    this.imgBall.src = "./Images/brown_ball.png"
  }

  // Methods

  // 1. Draw
  drawBigBall = () => {

    ctx.drawImage(this.imgBall, this.x, this.y, this.width, this.height)

    // ctx.beginPath()
    // ctx.fillStyle = "blue"
    // ctx.arc(this.X, this.Y, 50, 0, 2 * Math.PI )
    // ctx.fill()
    // ctx.stroke()
    // ctx.closePath() 
  }

  // 2. Movement
  
  ballMovement = () => {
    
    this.x = this.x + (1 *this.directionX);
    
    this.y = this.y + (1 *this.directionY);
    
  }
  
}