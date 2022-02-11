class Game {
  constructor() {
    //Game properties

    this.bg = new Image();
    this.bg.src = "./images/background.png";
    this.player = new Player();
    this.ballArr = [new Ball(canvas.width / 2, 1)];
    this.ballCollision = 75;
    this.isGameOn = true;
    this.intervalId;
    this.score = new Score();
  }

  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  ballCanvasCollision = (ball) => {
    if (ball.x > canvas.width - 70) {
      ball.directionX = -1;
    } else if (ball.y > canvas.height - this.ballCollision) {
      ball.directionY = -1;
    } else if (ball.x < 0 + 15) {
      ball.directionX = 1;
    } else if (ball.y < 0 + 20) {
      ball.directionY = 1;
    }
  };
  spawningBall = (frequency) => {
    this.intervalId = setInterval(() => {
      
      const x = Math.random() * canvas.width;
      let directionX = Math.random();
      if (directionX === 0) {
        directionX = -1;
      }
      const newBall = new Ball(x, directionX);
      this.ballArr.push(newBall);
      if (frequency >= 1000) {  //this.score.value > 3000
        clearInterval(this.intervalId);
        this.spawningBall(frequency - 300);
        console.log(frequency);
      }
    }, frequency);
  };

  checkPlayerBallCollision = (ball) => {
    if (
      this.player.x < ball.x + ball.width &&
      this.player.x + this.player.width > ball.x &&
      this.player.y < ball.y + ball.height &&
      this.player.height + this.player.y > ball.y
    ) {
      finalScore.innerHTML = "Final Score: " + this.score.value;
      this.isGameOn = false;
      canvas.style.display = "none";
      gameOverScreen.style.display = "flex";
      
      // Music
      songs.pause();
      songs.src = "./sound/game_over.mp3";
      songs.loop = false;
      songs.play();
      songs.volume = 0.1;
      clearInterval(this.intervalId);
    }
  };

  createExplosion = () => {
    let audio = document.createElement("audio");
    audio.src = "./sound/explosion.mp3";
    audio.play();
    audio.volume = 0.1;
  };

  punchCollision = (ball, punch, ballIndex) => {
    if (
      punch.x < ball.x + ball.width &&
      punch.x + punch.width > ball.x &&
      punch.y < ball.y + ball.height &&
      punch.height + punch.y > ball.y
    ) {
      this.score.value = this.score.value + ball.score;
      this.ballArr.splice(ballIndex, 1);
      this.soundsId++;
      this.createExplosion();
      return true;
    } else {
      return false;
    }
  };

  cleanCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // methods

  gameLoop = () => {
    // 1. Clean canvas
    this.cleanCanvas();

    // 2. move elements or other actions
    this.ballArr.forEach((ball, ballIndex) => {
      ball.ballMovement();
      this.ballCanvasCollision(ball);
      this.checkPlayerBallCollision(ball);
      this.player.punchArr.forEach((punch, punchIndex) => {
        const collision = this.punchCollision(ball, punch, ballIndex);
        if (punch.y === 0 || collision === true) {
          this.player.punchArr.splice(punchIndex, 1);
        }
      });
    });

    this.player.punchArr.forEach((punch) => {
      punch.PunchMovement();
    });

    // 3.  Draw los elements
    this.drawBackground();

    this.ballArr.forEach((ball) => {
      ball.drawBigBall();
    });

    this.player.punchArr.forEach((punch) => {
      punch.drawPunch();
    });
    this.score.drawScore();

    this.player.drawPlayer();

    // 4. Animation recursion

    if (this.isGameOn !== false) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
