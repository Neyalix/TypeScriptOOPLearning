
export const Colours = [
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
];

export type Colour = typeof Colours[number];

export const colourCode = (colour: Colour): number => {
  return Colours.indexOf(colour);
};

export function decodedValue(colours: Colour[]): number {
  const firstValue = colourCode(colours[0]);
  const secondValue = colourCode(colours[1]);

  return Number(`${firstValue}${secondValue}`);
}
