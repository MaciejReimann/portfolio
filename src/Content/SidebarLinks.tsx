import React, { useContext, useEffect, useState } from "react"

import { PortfolioContext } from "../App"
import { IconButton } from "../Atoms/IconButton"

import styles from "./SidebarLinks.module.scss"

const SidebarLinks = () => {
  const context = useContext(PortfolioContext)
  const [linkedProjects, setLinkedProjects] = useState(null)

  useEffect(() => {
    const projects = context.getProjectDataForSideMenu()
    !linkedProjects && setLinkedProjects(projects)
  }, [linkedProjects])

  const scrollToStartPosition = name => {
    const startPosition = context.getProjectsStartPosition(name)
    window.scrollTo({ top: startPosition, behavior: "smooth" })
  }

  return (
    <div className={styles.wrapper}>
      {linkedProjects &&
        linkedProjects.map(({ name }, i) => (
          <div className={styles.button} key={name}>
            <IconButton onClick={() => scrollToStartPosition(name)}>
              {name}
            </IconButton>
          </div>
        ))}
    </div>
  )
}

export default SidebarLinks
