import Server from './callBackServer'
import { ICallBackServer, ICallBackClient } from './callBacks.interface'

describe('callbacks', () => {

    it('works', () => {

        const server = new Server() 
        const client1 = server.newClient("A")
        const client2 = server.newClient("B")


        client1.sendName()
        expect(client1.getLog()).toEqual(["A"])
        client2.sendName()
        expect(client1.getLog()).toEqual(["A", "B"])
        expect(client2.getLog()).toEqual(["A", "B"])
        // now client1 pushes again         
        client1.sendName()
        // now the clients can see all the pushes
        expect(client1.getLog()).toEqual(["A", "B", "A"])
        expect(client2.getLog()).toEqual(["A", "B", "A"])
        
    })
})