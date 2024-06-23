import { ContentDataSource, ContentRepository, CreateThematicDto, ThematicEntity } from "../../domain";

export class ContentRepositoryImpl implements ContentRepository{
    constructor(
        private readonly contentDataSourse: ContentDataSource
    ){}

    register(createThematicDto: CreateThematicDto): Promise<ThematicEntity> {
        return this.contentDataSourse.register(createThematicDto)
    }
}