
export type CardName = "assassino" | "capitao" | "condensa" | "duque" | "embaixador";
export type Port = number | string;
export type Cards = Card[];

export interface Card {
  name: CardName
  dead: boolean;
}