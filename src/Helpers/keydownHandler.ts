export const keydownHandler = (e, controls, game) => {
  e.preventDefault()
  const { code } = e
  return controls[code] && game.on()[controls[code]]()
}
