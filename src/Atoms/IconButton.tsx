import React from "react";

import styles from "./IconButton.module.scss";

export const IconButton = ({ onClick, children }) => {
  const handleClick = () => {
    console.log("dupa");
    onClick();
  };

  return (
    <span className={styles.wrapper} onClick={handleClick}>
      {children}
    </span>
  );
};
