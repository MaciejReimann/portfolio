export interface ProjectI {
  description: {
    name: string
  }
  config?: any
  boundingRect?: any
  project?: (config) => JSX.Element | any
}

export class Portfolio {
  public featuredProjects: ProjectI[]
  private activationMargin = 150
  private scrollY = 0

  constructor(featuredProjects) {
    this.featuredProjects = featuredProjects
  }

  setScrollY = y => (this.scrollY = y)

  getProjectDataForSideMenu = (): { name: string }[] =>
    this.featuredProjects.map(p => ({
      name: p.description.name,
      isActive: this.isProjectWithinMargin(p.description.name)
    }))

  getActiveProject = () =>
    this.featuredProjects.find(p =>
      this.isProjectWithinMargin(p.description.name)
    )

  getProjectsStartPosition = name => {
    const projectIndex = this.featuredProjects.indexOf(
      this.featuredProjects.find(project => project.description.name === name)
    )

    return this.featuredProjects
      .slice(0, projectIndex)
      .map(p => this.getElementBoundingRect(p.description.name).height)
      .reduce((a, b) => a + b, 0)
  }

  isProjectWithinMargin = name =>
    Math.abs(this.getProjectsStartPosition(name) - this.scrollY) <
    this.activationMargin

  setProjectBoundingRect = (name, boundingRect) => {
    this.featuredProjects = this.featuredProjects.map(p =>
      p.description.name === name ? { ...p, boundingRect } : p
    )
  }

  private getElementBoundingRect = name =>
    this.getProjectByName(name).boundingRect

  private getProjectByName = name =>
    this.featuredProjects.find(p => p.description.name === name)
}
