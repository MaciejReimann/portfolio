import TetrisWrapper from "./TetrisWrapper"
import Project2 from "./Project2"
import Project3 from "./Project3"

export const FeaturedProjects = [
  { description: { name: "Tetris" }, component: TetrisWrapper() },
  { description: { name: "Snake" }, component: Project2() },
  { description: { name: "Mazes" }, component: Project3() }
]
