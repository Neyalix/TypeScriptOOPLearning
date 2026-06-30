
export const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
]

export type Color = typeof COLORS[number];

export const colorCode = (colour: Color): number => {
  return COLORS.indexOf(colour)
}
