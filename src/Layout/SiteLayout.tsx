import React, { useRef, useEffect, useContext } from "react"

import { PortfolioContext } from "../App"

import styles from "./SiteLayout.module.scss"

const SiteLayout = ({ header, sidebar, content }) => {
  return (
    <div>
      <div className={styles.header}>{header}</div>
      <aside className={styles.sidebar}>{sidebar}</aside>
      <main className={styles.content}>{content}</main>
    </div>
  )
}

export default SiteLayout
