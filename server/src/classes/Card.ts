import { CardName } from "../services/types";

class Card {
  private _dead: boolean = false;
  private _cardName: CardName;

  constructor(cardName: CardName) {
    this._cardName = cardName;
  }

  /** Mata carta */
  public killCard = () => this._dead = true;

  /** Retorna o nome da carta */
  public get cardName() {
    return this._cardName;
  };

  /** Retorna se a carta está mota */
  public get dead() {
    return this._dead;
  };
}

export default Card;