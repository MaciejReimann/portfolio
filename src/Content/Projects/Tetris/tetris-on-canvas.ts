interface TetrisConfigI {
  width: number
  height: number
}

export class TetrisOnCanvas {
  config: TetrisConfigI = null
  tetris: any = null
  canvas: HTMLCanvasElement = null
  ctx: any

  constructor(config) {
    this.config = config
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
    console.log(this.ctx)
  }

  private clearCanvas = () => {
    this.ctx.clearRect(0, 0, this.config.width, this.config.height)
  }
}
