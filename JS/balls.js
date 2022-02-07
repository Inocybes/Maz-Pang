class Balls {

  constructor () {
    // properties
    this.X = canvas.width/2;
    this.Y = -20;
    this.DirectionX = 1;
    this.DirectionY = 1;
    
  }

  // Methods

  // 1. Draw
  drawBalls = () => {

    ctx.beginPath()
    ctx.fillStyle = "blue"
    ctx.arc(this.X, this.Y, 50, 0, 2 * Math.PI )
    ctx.fill()
    ctx.stroke()
    ctx.closePath() 
  }

  // 2. Movement
  
  ballsMovement = () => {
    
    this.X = this.X + (1 *this.DirectionX);
    
    this.Y = this.Y + (1 *this.DirectionY);
    
  }
  
}