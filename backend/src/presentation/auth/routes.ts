import {Router} from 'express';
import { AuthCOntroller } from './controller';
import { AuthDatasourceImpl, AuthRepositoryImpl } from '../../infrastructure';

export class AuthRoutes {
    static get routes(): Router{

        const router = Router();

        const datasource = new AuthDatasourceImpl();
        const authRepository = new AuthRepositoryImpl(datasource);

        const controller = new AuthCOntroller(authRepository)
        // Routes of auth
        router.post('/login', controller.loginUser)
        router.post('/register', controller.registerUser)
        return router
    }
}