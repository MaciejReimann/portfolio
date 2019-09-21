import React from "react"

import Footer from "./Footer"
import { ProjectContainer } from "../Content/ProjectContainer"

import styles from "./ContentWrapper.module.scss"

const ContentWrapper = ({ projects }) => (
  <div className={styles.wrapper}>
    {projects.map(({ description, component }) => (
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

export default ContentWrapper
