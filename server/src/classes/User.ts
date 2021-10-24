import { Card, Cards } from "../services/types";

class User {
  private _id?: number;
  private _dead: boolean = false;
  private _hand: Cards = [];
  private _coins: number = 0;
  public extraHand: Cards = [];

  constructor(id: number, avaiableCards: Card[]) {
    this._id = id;
  }
  
  /** Retorna o id do jogador */
  public get id() {
    return this._id; 
  }

  /** Retorna a mão do jogador */
  public get hand() {
    return this._hand; 
  }

  /** Verifica se o jogador está morto */
  public get dead() {
    return this._dead;
  }

  /** Verifica se o jogador está morto */
  public get coins() {
    return this._coins;
  }
  
  /** Mata o jogador */
  public killPlayer = () => this._dead = true;

  /** Dá uma carta para o jogador */
  public giveCard(card: Card) {
    const hand = this._hand;
    const handFull = hand.length >= 2;
    if (handFull) return;

    return this._hand.push(card);
  }

  /** Troca carta do jogador na posição index pela newCard */
  public changeCard(index: number, newCard: Card) {
    const hand = this._hand;
    const oldCard = hand[index];

    if (!oldCard) return;

    this._hand[index] = newCard;
  }

  /** Mata a carta selecionada do jogador */
  public killCard = (index: number) => {
    const hand = this._hand;
    const cardToKill = hand[index];

    if (!cardToKill) return;
    cardToKill.dead = true;
  }

  /** Dá moedas ao jogador na quantidade passada */
  public giveCoins = (quantity: number) => this.coins += quantity;
  /** Remove moedas do jogador na quantidade passada */
  public removeCoins = (quantity: number) => this.coins -= quantity;


}

export default User;