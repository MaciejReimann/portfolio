import React from "react";

import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";

const projects = [
  { name: "Tetris", component: <Project1 /> },
  { name: "Snake", component: <Project2 /> },
  { name: "Mazes", component: <Project3 /> }
];

const ProjectDescription = ({ description, children }) => {
  return (
    <div>
      {description.name}
      <div>{children}</div>
    </div>
  );
};

const projectsWithDescription = ({ description, project }) => {
  return (
    <>
      <ProjectDescription description={description}>
        {React.cloneElement(project)}
      </ProjectDescription>
    </>
  );
};

const Projects = () => {
  return projects.map((project, i) => (
    <div>{React.cloneElement(project.component, { name: project.name })}</div>
  ));
};

export default Projects;
