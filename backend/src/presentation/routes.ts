import {Router} from 'express'
import { AuthRoutes } from './auth/routes';
import { ContentRoutes } from './content/routes';

export class AppRoutes{
    static get routes(): Router{
        const router = Router();
        // Defined all routes
        router.use('/api/auth', AuthRoutes.routes )
        router.use('/api/content', ContentRoutes.routes)
        return router;
    }
}
