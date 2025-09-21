import { SimpleClock, ClockClient } from "./simpleClockUsingPull";


test("test of SimpleClock", () => {
    const clock1 = new SimpleClock
    expect(clock1.time).toBe(0)
    clock1.tick()
    clock1.tick()   
    expect(clock1.time).toBe(2)
    clock1.reset()
    expect(clock1.time).toBe(0)
})
test("test of ClockClient", () => {
    const clock1 = new SimpleClock
    expect(clock1.time).toBe(0)
    const client1 = new ClockClient(clock1)
    expect(clock1.time).toBe(0)
    expect(client1.clientTime()).toBe(0)
    clock1.tick()
    clock1.tick()
    expect(client1.clientTime()).toBe(2)
})
