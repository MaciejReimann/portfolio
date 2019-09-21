import React, { createContext } from "react"
//
import SiteLayout from "./Layout/SiteLayout"
import FixedHeader from "./Layout/FixedHeader"
import FixedSidebar from "./Layout/FixedSidebar"
//
import SidebarLinks from "./Content/SidebarLinks"
import { ProjectContainer } from "./Content/ProjectContainer"
//
import { FeaturedProjects } from "./Content/Projects/featured-projects"
//
import { Portfolio } from "./State/portfolio-state"
//
import Tetris from "@maciejreimann/tetris"

const portfolioState = new Portfolio()

export const PortfolioContext = createContext(portfolioState)

const App = () => {
  return (
    <PortfolioContext.Provider value={portfolioState}>
      <SiteLayout
        header={<FixedHeader />}
        sidebar={<FixedSidebar content={<SidebarLinks />} />}
        content={FeaturedProjects.map(({ description, component }) => (
          <div key={description.name}>
            <ProjectContainer description={description} key={description.name}>
              {component}
            </ProjectContainer>
          </div>
        ))}
      />
    </PortfolioContext.Provider>
  )
}

export default App
