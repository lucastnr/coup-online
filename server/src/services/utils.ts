import Card from "../classes/Card";
import { CardName, Cards } from "./types";
import {v4 as uuid } from "uuid";

const possibleCards: CardName[] = [ "assassino", "capitao", "condensa", "duque", "embaixador" ];

/** Retorna um numéro inteiro aleatório em intervalo */
export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/** Escolhe uma carta a partir de uma lista de cartas */
export const pickCard = (cards: Cards) => {
  const cardsLen = cards.length;
  const selectedIndex = randomIntFromInterval(0, cardsLen);
  const selectCard = cards[selectedIndex];
  cards.splice(selectedIndex, 1);

  return [selectCard, cards];
}

/** Cria o deck a partir do número de cartas */
export const createDeck = (quantityByRole: number) => {
  let deck: Cards = [];
  possibleCards.map((cardName) => {
    for (let i = 0; i <= quantityByRole; i++) {
      const card = new Card(cardName);
      console.log(card);
      deck.push(card);
    }
  })

  return deck;
}

export const generateUuid = uuid();