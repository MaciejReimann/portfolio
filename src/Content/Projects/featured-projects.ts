import GameWrapper from "../ProjectWrapper"
import Tetris from "@maciejreimann/tetris"
import Project2 from "./Project2"
import Project3 from "./Project3"
import { ProjectI } from "../../State/portfolio-state"

const tetris = {
  start: () => console.log("Tetris started!"),
  moveLeft: () => console.log("Tetris moved left!"),
  moveRight: () => console.log("Tetris moved right!")
}

export const FeaturedProjects: ProjectI[] = [
  {
    description: { name: "Tetris" },
    component: tetris
  },
  { description: { name: "Snake" }, component: Project2() },
  { description: { name: "Mazes" }, component: Project3() }
]
