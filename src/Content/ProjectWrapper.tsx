import React, { useEffect } from "react"

import styles from "./ProjectWrapper.module.scss"

const ProjectWrapper = ({ name, game }) => {
  const handler = e => keydownHandler(name, game, e)

  useEffect(() => {
    window.addEventListener("keydown", handler)
    return () => {
      window.removeEventListener("keydown", handler)
    }
  })

  return (
    <div className={styles.wrapper}>
      <div>
        <canvas className={styles.canvas} width={250} height={250}></canvas>
      </div>
    </div>
  )
}

const keydownHandler = (name, game, e) => {
  e.preventDefault()
  const { code } = e

  switch (code) {
    case "Space":
      return game.start()
  }

  switch (name) {
    case "Tetris":
      switch (code) {
        case "ArrowLeft":
          return game.moveLeft()
        case "ArrowRight":
          return game.moveRight()
      }
  }
}

const Wrapper = (name, game) => <ProjectWrapper name={name} game={game} />

export default Wrapper
