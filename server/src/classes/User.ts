import { Socket } from "socket.io";
import Player from "./Player";

class User {
  private _socket: Socket;
  private _player?: Player;

  constructor(socket: Socket) {
    this._socket = socket;
  }

  /** Cria o jogador */
  public createPlayer = (id: number) => {
    this._player = new Player(id);
  }

  /** Retorna o jogador */
  public get player() {
    return this._player;
  }
}

export default User;