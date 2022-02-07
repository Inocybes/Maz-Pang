class Player  {

  constructor () {
    // character properties

    this.x = canvas.width/2;
    this.y = canvas.height -95;
    this.width = 70;
    this.height = 70;
    this.img = new Image();
    this.img.src = "./Images/MZ.png"
  }

  // Methods

  // 1. Draw
  drawPlayer = () => {

    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }

  // 2. Movement
  


}
