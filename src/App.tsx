import React from "react";
//
import SiteLayout from "./Layout/SiteLayout";
import FixedHeader from "./Layout/FixedHeader";
import FixedSidebar from "./Layout/FixedSidebar";
import ContentLayout from "./Layout/ContentLayout";
//
import SidebarLinks from "./Content/SidebarLinks";
import { ProjectContainer } from "./Content/ProjectContainer";
//
import { FeaturedProjects } from "./Content/Projects/featured-projects";

import Tetris from "@maciejreimann/tetris";

const App = () => {
  console.log(Tetris.printHello());

  return (
    <SiteLayout
      header={<FixedHeader />}
      sidebar={<FixedSidebar content={<SidebarLinks />} />}
      content={
        <ContentLayout
          contentItems={FeaturedProjects.map(project => (
            <ProjectContainer {...project.description}>
              {project.component}
            </ProjectContainer>
          ))}
        />
      }
    />
  );
};

export default App;
