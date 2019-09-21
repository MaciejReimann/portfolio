import React, { FC, useRef, useEffect, useContext } from "react"
import { PortfolioContext } from "../App"
import { getBoundingClientRect } from "../Helpers/getBoundingClientRect"

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

  context.addRenderedProject(description)

  useEffect(() => {
    const projectBoundingRect = getBoundingClientRect(projectDiv.current)
    context.setElementBoundingRect(description.name, projectBoundingRect)
  })

  return (
    <div className={styles.wrapper} ref={projectDiv}>
      <div>{description.name}</div>
      <div>{children}</div>
    </div>
  )
}
