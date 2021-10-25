import { Server, Socket } from "socket.io";
import { Port } from "../services/types";
import User from "./User";

class App {
  /** Socket */
  private io?: Server;
  /** Porta do servidor */
  private PORT?: number;
  /** Objeto com usuários */
  private users: Record<string, User> = {};

  public start(port: Port) {
    this.PORT = port as number;

    this.initializeSocket();
    this.listen();
  }

  /** Cria referência e inicializa io */
  private initializeSocket() {
    const port = this.PORT;
    if (!port) return;
    this.io = new Server(port);
  }

  /** Ativa listeners */
  private listen() {
    const io = this.io;
    if (!io) return;

    io.on("connection", this.connectionHandler);
  }

  /** Adiciona usuário na lista de usuários */
  private appendUser = (user: User) => {
    const uuid = user.uuid;
    return this.users[uuid] = user;
  }

  /** Lida com as funções de desconexão */
  private disconnectionHandler = (user: User) => {
    const uuid = user.uuid;
    delete this.users[uuid];

    this.updateUserCount();
    console.log("[!] Usuário desconectado")
  }

  /** Atualiza a contagem de usuários na sala */
  private updateUserCount = () => {
    const io = this.io;
    if (!io) return;
    
    const users = this.users;
    const playerCount = Object.keys(users).length;
    io.emit("playerCount", playerCount);
  }

  /** Lida com as funções de conexão */
  private connectionHandler = (socket: Socket) => {
    const user = new User(socket);
    this.appendUser(user);
    this.updateUserCount();
    console.log("[!] Usuário contectado");

    user.createPlayer();
    user.sendUserData();
    socket.on("disconnect", () => this.disconnectionHandler(user));
  }
}

export default App;