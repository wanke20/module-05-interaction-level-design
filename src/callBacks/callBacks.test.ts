import { Server } from './callBackExample'
import { ICallBackServer, ICallBackClient } from './callBacks.interface'

describe('callbacks', () => {

    it('works', () => {

        const server = new Server() as ICallBackServer
        const client1 = server.newClient("A")
        const client2 = server.newClient("B")


        client1.sendPush()
        expect(client1.getLog()).toEqual(["A"])
        client2.sendPush()
        expect(client1.getLog()).toEqual(["A", "B"])
        expect(client2.getLog()).toEqual(["A", "B"])
        // now client1 pushes again         
        client1.sendPush()
        // now the clients can see all the pushes
        expect(client1.getLog()).toEqual(["A", "B", "A"])
        expect(client2.getLog()).toEqual(["A", "B", "A"])
        
    })
})