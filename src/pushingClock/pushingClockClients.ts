import { IPushingClock, IPushingClockClient } from './pushingClock.interface';

export class PushingClockClient implements IPushingClockClient {

    private _time:number
    constructor (theclock:IPushingClock) {
        this._time = theclock.addListener(this)
    }

    notify (t:number) : void {this._time = t}

    get time () : number {return this._time}
}

// the Observer gets to decide what to do with the notification
export class DifferentClockClient implements IPushingClockClient {
    
    /** TWICE the current time, as reported by the clock */
    private _twiceTime:number

    constructor (theclock:IPushingClock) {
        this._twiceTime = theclock.addListener(this) * 2
    }

    /** list of all the notifications received */
    public readonly notifications : number[] = [] // just for fun

    notify(t: number) : void {
        this._twiceTime = t * 2
        this.notifications.push(t)    
    }

    get time() : number { return (this._twiceTime / 2) }
}
