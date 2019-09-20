import React, { FC, useRef, useEffect, useContext } from "react"
import { PortfolioContext } from "../App"

import styles from "./ProjectContainer.module.scss"

interface ProjectContainerProps {
  name: string

  children: any
}

export const ProjectContainer: FC<ProjectContainerProps> = ({
  name,
  children
}) => {
  const context = useContext(PortfolioContext)
  const projectDiv = useRef(null)

  useEffect(() => {
    context.setContainersBoundingClientRects({
      name,
      ...getBoundingClientRect(projectDiv.current)
    })
  })

  return (
    <div className={styles.wrapper} ref={projectDiv}>
      <div>{name}</div>
      <div>{children}</div>
    </div>
  )
}

function getBoundingClientRect(element) {
  const rect = element.getBoundingClientRect()
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  }
}
