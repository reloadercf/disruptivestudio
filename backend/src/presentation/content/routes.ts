import {Router} from 'express';
import { ContentDataSourceImpl, ContentRepositoryImpl } from '../../infrastructure';
import { ThematicController } from './controller';

export class ContentRoutes {
    static get routes(): Router{
        const router = Router();

        const dataSource = new ContentDataSourceImpl();
        const contentRepository = new ContentRepositoryImpl(dataSource);

        const controller = new ThematicController(contentRepository);

        router.post('/thematic', controller.createThematic);

        return router;
    }
}