import React, { createContext } from "react"
//
import SiteLayout from "./Layout/SiteLayout"
import FixedHeader from "./Layout/FixedHeader"
import FixedSidebar from "./Layout/FixedSidebar"
import ContentWrapper from "./Layout/ContentWrapper"
//
import SidebarLinks from "./Content/SidebarLinks"
//
import { FeaturedProjects } from "./Content/Projects/featured-projects"
//
import { Portfolio } from "./State/portfolio-state"
//

const portfolioState = new Portfolio()
export const PortfolioContext = createContext(portfolioState)

const App = () => {
  return (
    <PortfolioContext.Provider value={portfolioState}>
      <SiteLayout
        header={<FixedHeader />}
        sidebar={<FixedSidebar content={<SidebarLinks />} />}
        content={<ContentWrapper projects={FeaturedProjects} />}
      />
    </PortfolioContext.Provider>
  )
}

export default App
