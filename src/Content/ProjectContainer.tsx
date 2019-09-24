import React, { FC, useRef, useEffect, useContext, useState } from "react"

import { PortfolioContext } from "../App"
import { getBoundingClientRect } from "../Helpers/getBoundingClientRect"
// import { attachControls } from "./Helpers/attachControls"

import styles from "./ProjectContainer.module.scss"

interface ProjectContainerProps {
  description: any
  children: any
}

export const ProjectContainer: FC<ProjectContainerProps> = ({
  description,
  children
}) => {
  const context = useContext(PortfolioContext)
  const projectDiv = useRef(null)

  useEffect(() => {
    const projectBoundingRect = getBoundingClientRect(projectDiv.current)
    context.setProjectBoundingRect(description.name, projectBoundingRect)
  })

  // attachControls(description.name)

  return (
    <div className={styles.wrapper} ref={projectDiv}>
      <div className={styles.header}>
        <div className={styles.left}>some stuff</div>
        <div className={styles.name}>{description.name}</div>
        <div className={styles.links}>
          <span className={styles.icon}>github</span>
          <span className={styles.icon}>npm</span>
        </div>
      </div>
      <div className={styles.project}>{children}</div>
      <div className={styles.footer}>
        <div className={styles.technologies}>technologies used</div>
      </div>
    </div>
  )
}
