import { Socket } from "socket.io";
import { Role } from "../services/types";
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
    return this._player;
  }

  /** Retorna o jogador */
  public get player() {
    return this._player;
  }
  /** Retorna o socket */
  public get socket() {
    return this._socket;
  }
}

export default User;