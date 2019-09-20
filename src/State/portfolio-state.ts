import {
  getBoundingClientRect,
  BoundingRectI
} from "../Helpers/getBoundingClientRect"

export type ProjectContainerTop = {
  name: string
  top: number
}

export interface ProjectContainerBounding extends BoundingRectI {
  name: string
}

export class PortfolioState {
  private projectsContainerBounding = []
  private headerBounding = null

  setHeaderBounding = (rect: BoundingRectI) => {
    this.headerBounding = rect
  }

  setContainersBoundingClientRects = obj => {
    this.projectsContainerBounding.push(obj)
  }

  getProjectsContainerBounding = new Promise((res, rej) => {
    setTimeout(() => {
      if (this.projectsContainerBounding.length)
        res(this.projectsContainerBounding)
      setTimeout(() => {
        if (this.projectsContainerBounding.length)
          res(this.projectsContainerBounding)
      }, 150)
    }, 150)

    setTimeout(() => {
      if (!this.projectsContainerBounding.length) {
        rej()
      }
    }, 1000)
  })

  getProjectsContainerAbsoluteTopPositions = async () =>
    await this.getProjectsContainerBounding.then(
      (containers: ProjectContainerBounding[]) =>
        containers.map(
          ({ name, height }, i): ProjectContainerTop => ({
            name,
            top: height * i
          })
        )
    )
}
