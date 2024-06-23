import { ThematicModel } from "../../data/mongodb";
import { ContentDataSource, CreateThematicDto, CustomError, ThematicEntity } from "../../domain";

export class ContentDataSourceImpl implements ContentDataSource{
    async register(createThematicDto: CreateThematicDto):Promise<ThematicEntity>{
        const { nameThematic, permissions } = createThematicDto;
        console.log('Llego la tematica');
        
        try{
            const isThematicExist = await ThematicModel.findOne({nameThematic})
            if(isThematicExist) throw CustomError.badRequest('Thematic exist')
            
            const thematic = await ThematicModel.create({
                nameThematic,
                permissions
            })
            await thematic.save()

            return new ThematicEntity(
                thematic.id,
                // @ts-ignore: Unreachable code error
                thematic.nameThematic,
                thematic.permissions
            )
        } catch(error){
            if(error instanceof CustomError){
                throw error;
            }

            throw CustomError.internalServerError();
        }
    }
}