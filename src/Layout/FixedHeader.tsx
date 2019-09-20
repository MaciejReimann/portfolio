import React, { useRef, useEffect, useContext } from "react"

import { PortfolioContext } from "../App"

import styles from "./FixedHeader.module.scss"

const FixedHeader = () => {
  const headerDiv = useRef(null)
  const context = useContext(PortfolioContext)

  useEffect(() => {
    const headerBounding = getBoundingClientRect(headerDiv.current)
    context.setHeaderBounding(headerBounding)
  })

  return (
    <div className={styles.wrapper} ref={headerDiv}>
      Fixed Header
    </div>
  )
}

export default FixedHeader

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
