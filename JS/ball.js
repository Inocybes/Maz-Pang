class Ball {
  constructor(x, directionX) {
    // properties
    this.x = x;
    this.y = -20;
    this.directionX = directionX;
    this.directionY = 1;
    this.imgBall = new Image();
   
    // spawning balls
    const type = Math.round(Math.random() * 10);
    switch (type) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        this.imgBall.src = "./images/brown_ball.png";
        this.width = 70;
        this.height = 70;
        this.speed = 2;
        this.score = 200;
        break;
      case 6:
      case 7:
      case 8:
        this.imgBall.src = "./images/bowling-balls.png";
        this.width = 60;
        this.height = 60;
        this.speed = 2;
        this.score = 300;
        break;

      case 9:
      case 10:
        this.imgBall.src = "./images/eyeball.png";
        this.width = 40;
        this.height = 40;
        this.speed = 3;
        this.score = 800;
        break;
    }
  }

  // Methods

  // 1. Draw
  drawBigBall = () => {
    ctx.drawImage(this.imgBall, this.x, this.y, this.width, this.height);
  };

  // 2. Movement

  ballMovement = () => {
    this.x = this.x + this.speed * this.directionX;
    this.y = this.y + this.speed * this.directionY;
  };
}
