import { BoundingRectI } from "../Helpers/getBoundingClientRect"

export type ProjectContainerTop = {
  name: string
  top: number
}

export interface ProjectContainerBounding extends BoundingRectI {
  name: string
}

export class Portfolio {
  private renderedProjects = []
  private elementPositions = {}

  addRenderedProject = projectData => {
    this.renderedProjects = [
      ...this.renderedProjects,
      { ...projectData, index: this.renderedProjects.length }
    ]
  }

  getRenderedProjects = () => this.renderedProjects

  getProjectsStartPosition = name => {
    const projectIndex = this.getRenderedProjects().find(
      project => project.name === name
    ).index

    return this.getRenderedProjects()
      .slice(0, projectIndex)
      .map(p => this.getElementBoundingRect(p.name).height)
      .reduce((a, b) => a + b, 0)
  }

  setElementBoundingRect = (element, boundingRect) => {
    this.elementPositions[element] = boundingRect
  }
  getElementBoundingRect = element => this.elementPositions[element]
}
