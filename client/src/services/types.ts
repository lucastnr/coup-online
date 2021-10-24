import { Socket } from "socket.io-client";

export type CardName = "assassino" | "capitao" | "condensa" | "duque" | "embaixador";

export type Enviroment = "development" | "test" | "production";

export interface IGlobalInitial {
    io: Socket;
}