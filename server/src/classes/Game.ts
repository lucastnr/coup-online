import { Cards } from "../services/types";
import { createDeck } from "../services/utils";
import Player from "./Player";
import User from "./User";

class Game {
  private _players: Player[] = [];
  private _deck: Cards = [];

  constructor(users: User[], quantityByRole: number) {
    this._players = this.createPlayers(users);
    this._deck = createDeck(quantityByRole);
  }

  /** Cria e retorna os jogadores a partir dos usuários */
  private createPlayers = (users: User[]) =>
    users.map((user, index) =>
      user.createPlayer(index)
    );

  /** Retorna os jogadores */
  public get players() {
    return this._players;
  }

  /** Retorna o deck */
  public get deck() {
    return this._deck;
  }
}

export default Game;