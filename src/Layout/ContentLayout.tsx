import React from "react";

import styles from "./ContentLayout.module.scss";

const ContentLayout = ({ contentItems }) => {
  return (
    <div className={styles.wrapper}>
      {contentItems.map((item, i) => (
        <div className={styles.card} key={i}>
          <div className={styles.item}>{item}</div>
        </div>
      ))}
    </div>
  );
};

export default ContentLayout;
