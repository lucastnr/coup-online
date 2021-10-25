import { Server, Socket } from "socket.io";
import { Port } from "../services/types";

class App {
  /** Socket */
  private io?: Server;
  /** Porta do servidor */
  private PORT?: number;

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

  /** Lida com as funções da conexão */
  private connectionHandler(socket: Socket) {
    console.log("[!] Usuário contectado");
    socket.on("disconnect", () =>
      console.log("[!] Usuário desconectado")
    );
  }
}

export default App;