import React from "react"
import Tetris from "@maciejreimann/tetris"

import styles from "./TetrisWrapper.module.scss"

const TetrisWrapper = () => {
  const tetris = Tetris

  return (
    <div className={styles.wrapper}>
      <div>
        <canvas className={styles.canvas} width={250} height={250}></canvas>
      </div>
    </div>
  )
}

export default TetrisWrapper
