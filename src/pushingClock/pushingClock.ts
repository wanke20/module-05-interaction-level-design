import { IPushingClock, IPushingClockClient } from "./pushingClock.interface";

export default class PushingClock implements IPushingClock {
    private _time = 0
    reset() : void { this._time = 0; this.notifyAll() } 
    tick() : void { this._time++; this.notifyAll() } 

    private _observers: IPushingClockClient[] = []

    public addListener(obs:IPushingClockClient): number {
        this._observers.push(obs);
        return this._time
    }

    private notifyAll() : void {
            this._observers.forEach(obs => obs.notify(this._time))
        }     
    }




