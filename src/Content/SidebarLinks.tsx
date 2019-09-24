import React, { useContext, useEffect, useState } from "react"
import classNames from "classnames/bind"

import { PortfolioContext } from "../App"
import { IconButton } from "../Atoms/IconButton"

import styles from "./SidebarLinks.module.scss"
var cx = classNames.bind(styles)

const SidebarLinks = () => {
  const context = useContext(PortfolioContext)
  const [linkedProjects, setLinkedProjects] = useState([])
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    setLinkedProjects(context.getProjectDataForSideMenu())
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY)
    return () => window.removeEventListener("scroll", handleScrollY)
  })

  const handleScrollY = () => {
    setLinkedProjects(context.getProjectDataForSideMenu())
  }

  const scrollToStartPosition = name => {
    const startPosition = context.getProjectsStartPosition(name)
    window.scrollTo({ top: startPosition, behavior: "smooth" })
  }

  return (
    <div className={styles.wrapper}>
      {linkedProjects.map(({ name, isActive }, i) => (
        <div
          className={cx(styles.button, isActive && styles["button--active"])}
          key={name}
        >
          <IconButton onClick={() => scrollToStartPosition(name)}>
            {name}
          </IconButton>
        </div>
      ))}
    </div>
  )
}

export default SidebarLinks
