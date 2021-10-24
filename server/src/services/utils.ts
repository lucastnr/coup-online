import { Cards } from "./types";

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const pickCard = (cards: Cards) => {
  const cardsLen = cards.length;
  const selectedIndex = randomIntFromInterval(0, cardsLen);
  const selectCard = cards[selectedIndex];
  cards.splice(selectedIndex, 1);

  return [selectCard, cards];
}