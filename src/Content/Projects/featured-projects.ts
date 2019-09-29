import GameWrapper from "../ProjectWrapper"
// import Tetris from "@maciejreimann/tetris"
import Project2 from "./Project2"
import Project3 from "./Project3"
import { ProjectI } from "../../State/portfolio-state"

import Tetris from "./ReactTetris"

export const FeaturedProjects: ProjectI[] = [
  {
    description: { name: "Tetris" },
    project: Tetris,
    config: {
      width: 200,
      height: 400,
      controls: {
        Space: "start",
        ArrowLeft: "moveLeft",
        ArrowRight: "moveRight"
      }
    }
  },
  {
    description: { name: "Snake" },
    project: Project2,
    config: {
      width: 200,
      height: 400
    }
  }
  // { description: { name: "Mazes" }, project: Project3() }
]
