import React from "react";
//
import SiteLayout from "./Layout/SiteLayout";
import FixedHeader from "./Layout/FixedHeader";
import FixedSidebar from "./Layout/FixedSidebar";
import ContentLayout from "./Layout/ContentLayout";
//
import SidebarLinks from "./Content/SidebarLinks";
import Projects from "./Content/Projects";

import Tetris from "@maciejreimann/tetris";

const App = () => {
  console.log(Tetris.printHello());

  return (
    <SiteLayout
      header={<FixedHeader />}
      sidebar={<FixedSidebar content={<SidebarLinks />} />}
      content={<ContentLayout contentItems={Projects()} />}
    />
  );
};

export default App;
