import Tetris from "/Users/maciejreimann/Desktop/portfolio/projects/tetris-pwa/dist/index.js"

type TetrisGameboardI = []

class TetrisAdapter {
  tetris = null
  observers = []

  onGameboardChange: (gb: TetrisGameboardI) => void = null

  constructor(config?) {
    this.tetris = new Tetris(config)
  }

  addObserver = observer => {
    this.observers = [...this.observers, observer]
  }

  on = cb => {
    fire([...this.observers, cb])
    return {
      start: cb => this.tetris.startGame(cb),
      stop: cb => this.tetris.stopGame(cb),
      pause: cb => this.tetris.pauseGame(cb),
      moveLeft: cb => this.tetris.moveLeft(cb),
      moveRight: cb => this.tetris.moveRight(cb),
      moveDown: cb => this.tetris.moveDown(cb),
      dropDown: cb => this.tetris.dropDown(cb),
      turnLeft: cb => this.tetris.turnLeft(cb),
      turnRight: cb => this.tetris.turnLeft(cb)
    }
  }

  getConfig = () => this.tetris.getConfig()
  getGameboard = () => this.tetris.getGameboard()

  private updateGameboard = () => {
    this.onGameboardChange(this.getGameboard())
  }
}

export default TetrisAdapter

const fireIfFunction = cb => {
  if (typeof cb === "function") cb()
}

const fire = callbacks => {
  if (callbacks && callbacks.length) callbacks.forEach(fireIfFunction)
}
