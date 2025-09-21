// a simple ping-pong protocol for testing WebSocket connections.

// server starts with (ping 0)
// client replies to server 'ping n' with 'pong n'
// server replies to client 'pong n' with 'ping n+1' 

export interface ServerToClientEvents {
    'ping': (count:number) => void;
}

export interface ClientToServerEvents {
    'hello': (clientName: string) => void;
    'pong': (clientName: string, count:number) => void;
    'goodbye': (clientName: string) => void;
}

