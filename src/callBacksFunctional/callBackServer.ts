import { ICallBackClient, ICallBackServer } from "./callBacks.interface"
import Client from './callBackClient'

export default class Server implements ICallBackServer {

     public newClient(clientName: string): ICallBackClient {
        return new Client(this.sendNameHandler(clientName), this.logHandler)
    }

    // the log of all messages received
    private _log: string[] = []
    public log(): string[] { return this._log }     
    private logHandler = (): string[] => { return this._log }    
  
    // we'd like to write
    private BogusCallback(clientName: string): () => void  {
        return () => { this._log.push(clientName) }
    }
    // but this doesn't work because 'this' is not bound correctly
    // when the callback is called. So we use a lambda instead:

    private sendNameHandler = (clientName: string) => () => { this._log.push(clientName) }
    
    // this works because lambdas bind 'this' lexically, so 'this'
    // is always the server object.   
   
}




