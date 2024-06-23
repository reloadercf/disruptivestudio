import { ThematicEntity } from "../entities/thematic.entity";
import { CreateThematicDto } from "../dtos/content/create-thematic-content.dto";

export abstract class ContentRepository{
    abstract register(createThematicDto: CreateThematicDto): Promise<ThematicEntity>
}