class Player  {

  constructor () {
    // character properties

    this.x = canvas.width/2;
    this.y = canvas.height -125;
    this.width = 100;
    this.height = 100;
    this.img = new Image();
    this.img.src = "./Images/MZ.png"
    this.mzMarginWidth = 40;
    this.punchArr = [];
  }

  // Methods

  // 1. Draw
  drawPlayer = () => {

    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }

  
  // 2. Movement
  mzMovement = (event) => {

    if (event.key === "ArrowRight" && this.x <= canvas.width - this.width - this.mzMarginWidth) {
      this.x = this.x + 9
    } else if (event.key === "ArrowLeft" && this.x >= 0 + this.mzMarginWidth) {
      this.x = this.x - 9
    } else if(event.key === " ") {
        const newPunch = new Punch(this.x + 30, this.y);
        this.punchArr.push(newPunch);
    }
    //console.log(event.key);


    



  }


}
