export interface TetrisConfigI {
  width: number
  height: number
}

type TetrisGameboardI = []

export default class Tetris {
  id: number
  gameboard: TetrisGameboardI
  observers = []
  onGameboardChange: (gb: TetrisGameboardI) => void = null

  constructor(config) {
    this.gameboard = config
    this.id = Math.floor(Math.random() * 1000)
  }

  setObservers = observer => {
    this.observers = [...this.observers, observer]
  }

  getGameboard = () => this.gameboard

  on = () => {
    this.observers.forEach(observer => observer())
    return {
      start: () => console.log("Tetris started!", this.id),
      moveLeft: () => console.log("Tetris moved left!", this.id),
      moveRight: () => console.log("Tetris moved right!", this.id)
    }
  }

  private updateGameboard = () => {
    this.onGameboardChange(this.getGameboard())
  }
}
