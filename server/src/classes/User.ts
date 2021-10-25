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
  /** Retorna o uuid */
  public get uuid() {
    return this._uuid;
  }
  public sendUserData() {
    const socket = this._socket;
    socket.send("userData", this._player);
  }
}

export default User;