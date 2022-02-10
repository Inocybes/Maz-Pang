class Punch {
  constructor(x, y) {
    // properties
    this.x = x;
    this.y = y;
    this.velocity = 3;
    this.width = 30;
    this.height = 50;
    this.imgPunch = new Image();
    this.imgPunch.src = "./images/punch.png";
  }

  // Methods

  // 1. Draw
  drawPunch = () => {
    ctx.drawImage(this.imgPunch, this.x, this.y, this.width, this.height);
  };

  // 2. Movement

  PunchMovement = () => {
    this.y = this.y - this.velocity;
  };
}
