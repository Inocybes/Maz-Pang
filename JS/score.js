class Score {
  
  constructor () {
    // properties
    this.value = 0;
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 100;
    this.imgScore = new Image()
    this.imgScore.src = "./Images/brown_ball.png";
  }

  drawScore = () => {
    ctx.font = "30px Georgia";
    ctx.fillStyle= "Gold"
    ctx.fillText(`SCORE: ${this.value}`, 20, 50);
  }

}