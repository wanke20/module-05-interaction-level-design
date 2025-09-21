import { ICallBackClient } from "./callBacks.interface"

export default class Client implements ICallBackClient {

    // the server the client with two callbacks
    // creates it with two callbacks.

    // the callbacks are kept as private members
    private _sendNameCallback: () => void
    private _getLogCallback: () => string[]

    constructor(
        sendNameCallback: () => void,
        logCallback: () => string[],
        // install the callbacks
    ) { this._sendNameCallback = sendNameCallback; 
        this._getLogCallback = logCallback;
    }
        
    // the public methods just call the callbacks
    public sendName() { this._sendNameCallback(); }
    public getLog(): string[] { return this._getLogCallback(); }

}