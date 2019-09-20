import React, { createContext } from "react"
import defer from "lodash/defer"

//
import SiteLayout from "./Layout/SiteLayout"
import FixedHeader from "./Layout/FixedHeader"
import FixedSidebar from "./Layout/FixedSidebar"
//
import SidebarLinks from "./Content/SidebarLinks"
import { ProjectContainer } from "./Content/ProjectContainer"
//
import { FeaturedProjects } from "./Content/Projects/featured-projects"

import Tetris from "@maciejreimann/tetris"

export type BoundingRect = {
  bottom: number
  height: number
  left: number
  right: number
  top: number
  width: number
  x: number
  y: number
}

export type ProjectContainerTop = {
  name: string
  top: number
}

type name = { name: string }

export type ProjectContainerBounding = BoundingRect & name

// interface PorfolioI {
//   getProjectsContainerAbsoluteTopPositions: Promise<BoundingRect>
// }

class Portfolio {
  private projectsContainerBounding = []
  private headerBounding = null

  setHeaderBounding = (rect: BoundingRect) => {
    this.headerBounding = rect
    // console.log(this.headerBounding)
  }

  setContainersBoundingClientRects = obj => {
    // console.log(obj) // CHECK IF THE POSITION HAS BEEN SCROLLED -> ONSCROLL FLAG IF TRUE SETSTHE SETTING BACK TO DEFAULT, GET THE SCROLL TO DATA NOT FROM ACTUAL POSITION BUT THE N-TH HEIGHT
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

const portfolio = new Portfolio()

export const PortfolioContext = createContext(portfolio)

const App = () => {
  // console.log(portfolio);

  return (
    <PortfolioContext.Provider value={portfolio}>
      <SiteLayout
        header={<FixedHeader />}
        sidebar={<FixedSidebar content={<SidebarLinks />} />}
        content={FeaturedProjects.map(({ description, component }) => (
          <div key={description.name}>
            <ProjectContainer {...description} key={description.name}>
              {component}
            </ProjectContainer>
          </div>
        ))}
      />
    </PortfolioContext.Provider>
  )
}

export default App
