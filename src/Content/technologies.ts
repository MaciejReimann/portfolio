import Jest from "../Icons/jest-0.svg"
import Ramda from "../Icons/ramda.svg"

export class Technologies {
  public allIcons = [Jest, Ramda]

  getIconByName = name => this.allIcons.find(t => t === name)
}
