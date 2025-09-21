import IClock from "./IPullingClock";

export class SimpleClock implements IClock {
    private _time = 0
    public reset() : void {this._time = 0}
    public tick() : void { this._time++ }
    public get time(): number { return this._time }
}

export class ClockClient {
    constructor (private theclock:IClock) {}
    clientTime(): number {return this.theclock.time}
}

