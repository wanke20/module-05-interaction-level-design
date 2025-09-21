export interface ICallBackServer {
    newClient(clientName: string): ICallBackClient;
    log(): string[];  // returns the log of all push messages received
    handlePush(clientName: string): void; // called by a client to send a push message  
}

export interface ICallBackClient {
     // sends a push message to the server, 
    sendPush():void
    // asks the server for the current log.
    getLog(): string[]; 

}