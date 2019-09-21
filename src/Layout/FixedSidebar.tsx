import React from "react";

import styles from "./FixedSidebar.module.scss";

const FixedSidebar = ({ content }) => {
  return <div className={styles.wrapper}>{content}</div>;
};

export default FixedSidebar;
