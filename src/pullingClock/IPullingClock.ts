export default interface IPullingClock {

    /** sets the time to 0 */
    reset():void

    /** increments the time */ 
    tick():void

    /** returns the current time */
    /* 'getTime' violates naming convention */
    get time():number
}
