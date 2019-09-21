import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

export const FeaturedProjects = [
  { description: { name: "Tetris" }, component: Project1() },
  { description: { name: "Snake" }, component: Project2() },
  { description: { name: "Mazes" }, component: Project3() }
];
