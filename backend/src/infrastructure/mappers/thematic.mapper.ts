import { CustomError, ThematicEntity } from "../../domain";

export class ThematicMapper {
    static thematicEntityFromObject (object: {[key: string]:any}){
        const {id, _id, nameThematic, permissions} = object;
        if(!_id || !id){
            throw CustomError.badRequest('Missing id');
        }
        if(!nameThematic) throw CustomError.badRequest('Missing Name of thematic')

        return new ThematicEntity(
            _id || id,
            nameThematic,
            permissions
        )
    }
}