import Server from "./classes/Server";
const port = process.env.PORT || 1234;


const server = new Server();
server.start(port);