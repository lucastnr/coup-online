import { Server, Socket } from "socket.io";
import { Port } from "../services/types";

class App {
  /** Socket */
  private io?: Server;
  /** Porta do servidor */
  private PORT?: Port;

  public start(port: Port) {
    this.PORT = port;

    this.initializeSocket();
    this.listen();
  }

  /** Cria referência e inicializa io */
  private initializeSocket() {
    this.io = new Server();
  }

  /** Ativa listeners */
  private listen() {
    this.io?.on("connection", this.connectionHandler)
  }

  /** Lida com as funções da conexão */
  private connectionHandler(socket: Socket) {
    socket.on("teste", () => console.log("teste"));
  }
}

export default App;