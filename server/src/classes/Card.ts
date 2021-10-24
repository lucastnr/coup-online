import { CardName } from "../services/types";

class Card {
  private dead: boolean = false;
  private _cardName: CardName;

  constructor(cardName: CardName) {
    this._cardName = cardName;
  }

  /** Mata carta */
  public killCard = () => this.dead = true;

  /** Retorna o nome da carta */
  public get cardName() {
    return this._cardName
  };
}