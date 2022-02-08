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
  spawningBall = () => {
    this.intervalId = setInterval(() => {
      //necessito un id para cerrar el timer
      const x = Math.random() * canvas.width;
      let directionX = Math.random(); //* (1 - 0);
      if (directionX === 0) {
        directionX = -1;
      }
      const newBall = new Ball(x, directionX);
      this.ballArr.push(newBall);
    }, 8000);
  };

  checkPlayerBallCollision = (ball) => {
    if (
      this.player.x < ball.x + ball.width &&
      this.player.x + this.player.width > ball.x &&
      this.player.y < ball.y + ball.height &&
      this.player.height + this.player.y > ball.y
    ) {
      //! 1. Stop Loop and clear time interval
      this.isGameOn = false;
      canvas.style.display = "none";
      gameOverScreen.style.display = "flex";
      clearInterval(this.intervalId);
    }
  };

  punchCollision = (ball, punch, ballIndex) => {
    if (
      punch.x < ball.x + ball.width &&
      punch.x + punch.width > ball.x &&
      punch.y < ball.y + ball.height &&
      punch.height + punch.y > ball.y
    ) {
      this.ballArr.splice(ballIndex, 1);
    }
  };

  cleanCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // methods

  gameLoop = () => {
    // 1, Clean canvas
    this.cleanCanvas();

    // 2. move elements or other actions
    this.ballArr.forEach((ball, ballIndex) => {
      ball.ballMovement();
      this.ballCanvasCollision(ball);
      this.checkPlayerBallCollision(ball);
      this.player.punchArr.forEach((punch) => {
        this.punchCollision(ball, punch, ballIndex);
      });
      return ball;
    });

    // va to dentro del forEach porque se crean por parametro

    // 3.  Draw los elements
    this.drawBackground();

    this.ballArr.forEach((ball) => {
      ball.drawBigBall();
    });

    this.player.punchArr.forEach((punch) => {
      punch.PunchMovement();
      punch.drawPunch();
      return punch;
    });

    this.player.drawPlayer();

    // 4. Animation recursion
    requestAnimationFrame(this.gameLoop);
  };
}