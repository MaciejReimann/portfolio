import React, { useContext, useEffect, useState } from "react"

import { PortfolioContext } from "../App"
import { IconButton } from "../Atoms/IconButton"

import styles from "./SidebarLinks.module.scss"

const SidebarLinks = () => {
  const context = useContext(PortfolioContext)
  const [projectsData, setProjectData] = useState(null)
  const [topPosition, setTopPosition] = useState(0)

  // console.log(context.getHeaderBounding())

  useEffect(() => {
    !projectsData &&
      context
        .getProjectsContainerAbsoluteTopPositions()
        .then(result => setProjectData(result))
  })

  console.log(projectsData)

  useEffect(() => {
    window.scrollTo({ top: topPosition, behavior: "smooth" })
  }, [topPosition])

  const handleClick = position => {
    console.log(position)
    setTopPosition(position)
  }

  return (
    <div className={styles.wrapper}>
      {projectsData &&
        projectsData.map(({ name, top }, i) => (
          <div className={styles.button} key={name}>
            <IconButton onClick={() => handleClick(top)}>{name}</IconButton>
          </div>
        ))}
    </div>
  )
}

export default SidebarLinks
