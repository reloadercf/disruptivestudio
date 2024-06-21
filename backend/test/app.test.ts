import { Server } from "../src/presentation/server";
jest.mock("../src/presentation/server")


describe('Suite of server', ()=>{
    it('Should run server', async()=>{
        await import('../src/app')
        expect(Server).toHaveBeenCalled()

        expect(Server.prototype.start).toHaveBeenCalled()
    })
})