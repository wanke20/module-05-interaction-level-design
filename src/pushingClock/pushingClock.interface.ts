export interface IPushingClock {

    /** resets the time to 0 */
    reset():void  

    /**
     * increments the time and sends a .nofify message with the 
     * current time to all the consumers
     */
    tick():void 
    
    /** adds a new client */
    addListener(listener:IPushingClockClient):number 
}

export interface IPushingClockClient {
    /**
     *  * @param t - the current time, as reported by the clock
     */
    notify(t:number):void

    /** returns the current time, as last reported by the clock */
    get time():number
}






