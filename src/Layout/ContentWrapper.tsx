import React, { useContext } from "react"

import { PortfolioContext } from "../App"
import Footer from "./Footer"
import { ProjectContainer } from "../Content/ProjectContainer"

import styles from "./ContentWrapper.module.scss"

const ContentWrapper = () => {
  const context = useContext(PortfolioContext)

  return (
    <div className={styles.wrapper}>
      {context.featuredProjects.map(({ description, project, config }) => (
        <div key={description.name}>
          <ProjectContainer
            description={description}
            id={description.name}
            displayProject={() => project(config)}
          />
        </div>
      ))}
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default ContentWrapper
