game.splash("\"Pizza Diameter?\"")
let pizza_diameter = game.askForNumber("")
let total = (1.75 + pizza_diameter * 0.5) * 1.13
total = Math.round(total * 100) / 100
game.splash("\"Here is your total.")
game.splash(total)
