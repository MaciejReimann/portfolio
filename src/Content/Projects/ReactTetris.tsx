import React, { useEffect, useState, useRef } from "react"

import { keydownHandler } from "../../Helpers/keydownHandler"

import { TetrisOnCanvas } from "./tetris-on-canvas"
import Tetris from "./tetris"

const ReactTetris = ({ config }) => {
  const tetris = new Tetris(config)

  const handler = e => keydownHandler(e, config.controls, tetris)

  const canvasRef = useRef(null)

  useEffect(() => {
    const tetrisOnCanvas = new TetrisOnCanvas(config)
    tetris.setObservers(tetrisOnCanvas.render)
    tetrisOnCanvas.setCanvas(canvasRef.current)
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handler)
    return () => {
      window.removeEventListener("keydown", handler)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  )
}

export default config => <ReactTetris config={config} />
