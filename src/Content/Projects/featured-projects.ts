import TetrisWrapper from "./TetrisWrapper"
import Project2 from "./Project2"
import Project3 from "./Project3"
import { ProjectI } from "../../State/portfolio-state"

export const FeaturedProjects: ProjectI[] = [
  { description: { name: "Tetris" }, component: TetrisWrapper() },
  { description: { name: "Snake" }, component: Project2() },
  { description: { name: "Mazes" }, component: Project3() }
]
