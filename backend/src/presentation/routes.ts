import {Router} from 'express'
import { AuthRoutes } from './auth/routes';

export class AppRoutes{
    static get routes(): Router{
        const router = Router();
        // Defined all routes
        router.use('/api/auth',AuthRoutes.routes )
        return router;
    }
}
