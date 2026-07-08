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
] as const; 

export type Colour = typeof Colours[number];

export const colourCode = (colour: Colour): number => {
  return Colours.indexOf(colour);
};

export function decodedResistorValue(colours: Colour[]): string {
  const firstValue = colourCode(colours[0]);
  const secondValue = colourCode(colours[1]);
  const zeroCounts = colourCode(colours[2]);

  const baseValue = firstValue * 10 + secondValue;
  const totalOhms = baseValue * Math.pow(10, zeroCounts);

  if (totalOhms >= 1_000_000_000) {
    return `${totalOhms / 1_000_000_000} gigaohms`;
  }
  if (totalOhms >= 1_000_000) {
    return `${totalOhms / 1_000_000} megaohms`;
  }
  if (totalOhms >= 1_000) {
    return `${totalOhms / 1_000} kiloohms`;
  }
  
  return `${totalOhms} ohms`;
}