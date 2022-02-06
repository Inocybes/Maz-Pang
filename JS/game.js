class Game {

  constructor() {
    //Propiedades del juego
   
    this.bg = new Image();
    this.bg.src = "./images/background.png"
    
  }

  // métodos

  gameLoop = () => {

    // 1, Limpiar canvas

    // 2. mover elementos u otras acciones

    // 3.  Dibujar los elemnetos
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)

    // 4. Recursión para animación
    requestAnimationFrame(this.gameLoop);


  }

}