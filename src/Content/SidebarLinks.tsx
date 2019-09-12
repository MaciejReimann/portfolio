import React from "react";

import styles from "./SidebarLinks.module.scss";

const SidebarLinks = () => {
  const developedProjects = ["Tetris", "Snake", "Mazes"];
  return (
    <div className={styles.wrapper}>
      {developedProjects.map((project, i) => (
        <div key={i}>{project}</div>
      ))}
    </div>
  );
};

export default SidebarLinks;
