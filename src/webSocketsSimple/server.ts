import { createServer as createHttpServer } from "http";
import { Server, Socket } from "socket.io";
import { ClientToServerEvents, ServerToClientEvents } from "./shared";

const corsParams = {
  origin: "http://localhost:8080", // Updated to match client port
  methods: ["GET", "POST"],
};

var numConnectedClients: number = 0;

export default function createServer() {
  const httpServer = createHttpServer();
  const io = new Server<ClientToServerEvents, ServerToClientEvents>(
    httpServer,
    { cors: corsParams }
  );
  io.on("connection", (socket) => {
    console.log("server reports new connection");

    numConnectedClients += 1;
    console.log("> " + numConnectedClients);
    
    startServerHandlers(socket);
  });
  console.log("server.ts: Listening on port 8080");
  httpServer.listen(8080);
}

function startServerHandlers(
  socket: Socket<ClientToServerEvents, ServerToClientEvents>
) {
  console.log("sending initial ping");
  socket.emit("ping", 0); // send initial ping

  socket.on("pong", (clientName: string, count: number) => {
    console.log(`server received pong from ${clientName} with count ${count}`);
    if (count < 5) {
      socket.emit("ping", count + 1); // reply with ping n+1
    } else {
      console.log(`server disconnecting ${clientName} after 5 pings`);
      socket.disconnect();
      numConnectedClients -= 1;

      console.log("> " + numConnectedClients);
    }
  });

  socket.on("hello", (message: string) => {
    console.log(`server received message: ${message}`);
  });

  socket.on("goodbye", (clientName: string) => {
    console.log(`server received goodbye from ${clientName}`);
  });
}
