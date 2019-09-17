import React, { FC } from "react";

import styles from "./ProjectContainer.module.scss";

interface ProjectContainerProps {
  name: string;
}

export const ProjectContainer: FC<ProjectContainerProps> = ({
  name,
  children
}) => {
  return (
    <div className={styles.wrapper}>
      <div>{name}</div>
      <div>{children}</div>
    </div>
  );
};
