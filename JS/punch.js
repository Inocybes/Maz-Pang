class Punch {

  constructor (x, y ) {
    // properties
    this.x = x;
    this.y = y;
    this.velocity = 1;
    this.width = 30;
    this.height = 30;
    this.imgPunch = new Image();
    this.imgPunch.src = "./Images/punch.png"
  }

  // Methods

  // 1. Draw
  drawPunch = () => {
      ctx.drawImage(this.imgPunch, this.x, this.y, this.width, this.height)
  }

  // 2. Movement
  
  PunchMovement = () => {
      this.y = this.y - (1 *this.velocity);
  }
  
}