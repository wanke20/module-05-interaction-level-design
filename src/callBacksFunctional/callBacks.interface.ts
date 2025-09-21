export interface ICallBackServer {

    // returns a new client that satisfies the ICallBackClient interface
    newClient(clientName: string): ICallBackClient;
    
    // returns the log of all push messages received
    log(): string[];
} 


export interface ICallBackClient {
     // sends its own name to the server
    sendName: () => void
    // asks the server for list of all messages received
    // from all clients.
    getLog : () => string[]; 

}


