import { BoundingRectI } from "../Helpers/getBoundingClientRect"

export interface ProjectI {
  description: {
    name: string
  }
  component: JSX.Element
  boundingRect?: any
}

export class Portfolio {
  public featuredProjects: ProjectI[]
  private clientY = 0

  constructor(featuredProjects) {
    this.featuredProjects = featuredProjects
  }

  getProjectDataForSideMenu = (): { name: string }[] =>
    this.featuredProjects.map(p => ({
      name: p.description.name
    }))

  getProjectsStartPosition = name => {
    const projectIndex = this.featuredProjects.indexOf(
      this.featuredProjects.find(project => project.description.name === name)
    )

    return this.featuredProjects
      .slice(0, projectIndex)
      .map(p => this.getElementBoundingRect(p.description.name).height)
      .reduce((a, b) => a + b, 0)
  }

  // getActiveProject = () => {
  //   const heights = this.featuredProjects.map(p =>
  //     this.getProjectsStartPosition(p.description.name)
  //   )
  //   console.log(heights)
  // }

  setProjectBoundingRect = (name, boundingRect) => {
    this.featuredProjects = this.featuredProjects.map(p =>
      p.description.name === name ? { ...p, boundingRect } : p
    )
    console.log(this.featuredProjects)
  }

  setClientScrollY = y => {
    this.clientY = y
    // console.log(this.clientY)
  }

  private getElementBoundingRect = name =>
    this.getProjectByName(name).boundingRect

  private getProjectByName = name =>
    this.featuredProjects.find(p => p.description.name === name)
}
