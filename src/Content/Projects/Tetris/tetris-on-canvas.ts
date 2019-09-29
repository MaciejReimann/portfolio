interface TetrisConfigI {
  width: number
  height: number
}

export class TetrisOnCanvas {
  config: TetrisConfigI = null
  tetris: any = null
  res: number = null
  canvas: HTMLCanvasElement = null
  ctx: any

  constructor(config, tetris, res) {
    this.config = config
    this.tetris = tetris
    this.res = res
  }

  setCanvas = canvas => {
    this.canvas = canvas
    this.canvas.width = this.config.width
    this.canvas.height = this.config.height
    this.ctx = this.canvas.getContext("2d")
  }

  getCanvas = cb => cb(this.canvas)

  render = () => {
    this.clearCanvas()
    this.tetris.getGameboard().map(center => this.drawSquare(center))

    console.log(this.tetris.getGameboard())
  }

  private clearCanvas = () => {
    this.ctx.clearRect(0, 0, this.config.width, this.config.height)
  }

  private drawSquare = center => {
    const x = center.x - this.res / 2
    const y = center.y + this.res / 2
    this.ctx.beginPath()
    this.ctx.rect(x, y, this.res, this.res)
    this.ctx.fillStyle = this.applyFill(center.is)
    this.ctx.fill()
  }
  private applyFill = id => {
    //some default theme for start + add id shape to config definition -> a callback wich takes name as argument and return value
    return this.theme[id]
  }
}
