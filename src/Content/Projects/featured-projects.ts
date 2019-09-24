import Project1 from "./Project1"
import Project2 from "./Project2"
import Project3 from "./Project3"

// import { Technologies } from "../technologies"

enum Technologies {
  Javascript = "Javascript",
  Jest = "Jest"
}

export const FeaturedProjects = [
  {
    description: {
      name: "Tetris",
      technologiesUsed: [Technologies.Javascript, Technologies.Jest]
    },
    component: Project1()
  },
  {
    description: {
      name: "Snake",
      technologiesUsed: [Technologies.Javascript, Technologies.Jest]
    },
    component: Project2()
  },
  { description: { name: "Mazes" }, component: Project3() }
]
