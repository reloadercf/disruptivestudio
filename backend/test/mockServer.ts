import { Server } from '../src/presentation/server';
import { AppRoutes } from '../src/presentation/routes';



export const mockServer = new Server({
    port:3000,
    routes: AppRoutes.routes,
})