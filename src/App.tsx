import React from "react";
import Tetris from "@maciejreimann/tetris";

import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";

const App = () => {
  // const tetris = Tetris();
  console.log(Tetris.printHello());
  return (
    <div>
      Webpack with React
      <Project1 />
      <Project2 />
      <Project3 />
    </div>
  );
};

export default App;
