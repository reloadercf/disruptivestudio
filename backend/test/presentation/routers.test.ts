import request from 'supertest';
import { mockServer } from '../mockServer';

describe('API testing',()=>{
    // Arrange 
    beforeAll(async()=>{
        await mockServer.start();
    })

    it('Should have enpoint for register user on path api/auth/register', async()=>{
        const temporalPath = 'api/auth/register'
        await request(mockServer.app).post(temporalPath).expect(200)
    })
})