import { Socket } from "socket.io-client";

export type CardName = "assassino" | "capitao" | "condensa" | "duque" | "embaixador";

export type Enviroment = "development" | "test" | "production";

export interface IAppContext {
  signed: boolean;
  user: object | null;
  socket: Socket;
  playerCount?: number;
}
