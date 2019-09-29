import React, { useEffect, useState, useRef } from "react"

import styles from "./ReactTetris.module.scss"

import { keydownHandler } from "../../Helpers/keydownHandler"

import { TetrisOnCanvas } from "./tetris-on-canvas"
import Tetris from "./tetris"

const ReactTetris = ({ config }) => {
  const tetris = new Tetris(config)

  const handler = e => keydownHandler(e, config.controls, tetris)

  const mainCanvasRef = useRef(null)
  const smallCanvasRef = useRef(null)

  useEffect(() => {
    const tetrisOnCanvas = new TetrisOnCanvas(config)
    tetris.setObservers(tetrisOnCanvas.render)
    tetrisOnCanvas.setCanvas(mainCanvasRef.current)
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handler)
    return () => {
      window.removeEventListener("keydown", handler)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <canvas className={styles.mainCanvas} ref={mainCanvasRef} />
      <canvas className={styles.smallCanvas} ref={smallCanvasRef} />
    </div>
  )
}

export default config => <ReactTetris config={config} />
