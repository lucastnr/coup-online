import { Socket } from "socket.io";
import { Role } from "../services/types";
import { generateUuid } from "../services/utils";
import Player from "./Player";

class User {
  private _socket: Socket;
  private _player?: Player;
  private _uuid: string;

  constructor(socket: Socket) {
    this._socket = socket;
    this._uuid = generateUuid();
  }

  /** Cria o jogador */
  public createPlayer = () => {
    this._player = new Player();
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
  /** Retorna o uuid */
  public get uuid() {
    return this._uuid;
  }
  public sendUserData() {
    const player = this._player;
    if (!player) return;

    const socket = this._socket;
    socket.emit("userData", player);
  }
}

export default User;