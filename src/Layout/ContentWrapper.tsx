import React, { useEffect, useContext } from "react"

import { PortfolioContext } from "../App"
import Footer from "./Footer"
import { ProjectContainer } from "../Content/ProjectContainer"

import styles from "./ContentWrapper.module.scss"

const ContentWrapper = () => {
  const context = useContext(PortfolioContext)

  return (
    <div className={styles.wrapper}>
      {context.featuredProjects.map(({ description, component }) => (
        <div key={description.name}>
          <ProjectContainer description={description} key={description.name}>
            {component}
          </ProjectContainer>
        </div>
      ))}
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default ContentWrapper
