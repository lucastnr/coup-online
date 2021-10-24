import { IGlobalInitial } from "./types";
import socket from "./socket";

export const globalInitial: IGlobalInitial = {
    io: socket
}