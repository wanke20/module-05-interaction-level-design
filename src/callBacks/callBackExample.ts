import { ICallBackClient, ICallBackServer } from "./callBacks.interface"

export class Server implements ICallBackServer {

    // the log of all push messages received
    private _log: string[] = []    

    public handlePush(clientName: string): void {
        this._log.push(clientName)
    }

    public log(): string[] { return this._log }
    public newClient(name:string): ICallBackClient { 
        return new Client(name, this)
    }
}

export class Client implements ICallBackClient {    

    public sendPush () { this.server.handlePush(this.name); }
    public getLog () : string[] { return this.server.log() }

    private server: ICallBackServer
    private name: string

    constructor (
        _name: string,  // client name
        _server: ICallBackServer,
    ) { this.name = _name;
        this.server = _server
    }

    


}


