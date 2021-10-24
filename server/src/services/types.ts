
export type CardName = "assassino" | "capitao" | "condensa" | "duque" | "embaixador";
export type Port = number | string;
export type Hand = [ Card, Card ];

export interface Card {
  name: CardName
  dead: boolean;
}