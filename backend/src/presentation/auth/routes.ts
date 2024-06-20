import {Router} from 'express';
import { AuthCOntroller } from './controller';

export class AuthRoutes {
    static get routes(): Router{

        const router = Router();

        const controller = new AuthCOntroller()
        // Routes of auth
        router.post('/login', controller.loginUser)
        router.post('/register', controller.registerUser)
        return router
    }
}