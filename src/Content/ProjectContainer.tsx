import React, { FC, useCallback, useEffect, useContext, useState } from "react"
import classNames from "classnames/bind"

import { PortfolioContext } from "../App"
import { getBoundingClientRect } from "../Helpers/getBoundingClientRect"
// import { attachControls } from "./Helpers/attachControls"

import styles from "./ProjectContainer.module.scss"
var cx = classNames.bind(styles)

interface ProjectContainerProps {
  description: any
  id: any
  displayProject: any
}

export const ProjectContainer: FC<ProjectContainerProps> = ({
  description,
  id,
  displayProject
}) => {
  const context = useContext(PortfolioContext)

  const [isActive, setIsActive] = useState(null)

  const projectRef = useCallback(node => {
    if (node !== null) {
      const projectBoundingRect = getBoundingClientRect(node)
      context.setProjectBoundingRect(description.name, projectBoundingRect)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY)
    return () => window.removeEventListener("scroll", handleScrollY)
  })

  useEffect(() => {
    setIsActive(checkIfActive())
  }, [isActive])

  const handleScrollY = () => {
    context.setScrollY(window.scrollY)
    setIsActive(checkIfActive())
  }

  const checkIfActive = () => context.isProjectWithinMargin(description.name)

  return (
    <div
      className={cx(styles.wrapper, isActive && styles["wrapper--active"])}
      ref={projectRef}
      key={id}
    >
      <div className={styles.header}>
        <div className={styles.left}>some stuff</div>
        <div className={styles.name}>{description.name}</div>
        <div className={styles.links}>
          <span className={styles.icon}>github</span>
          <span className={styles.icon}>npm</span>
        </div>
      </div>
      <div className={styles.project}>{isActive && displayProject()}</div>
      <div className={styles.footer}>
        <div className={styles.technologies}>technologies used</div>
      </div>
    </div>
  )
}
