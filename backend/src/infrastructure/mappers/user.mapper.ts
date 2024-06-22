import { CustomError, UserEntity } from "../../domain";

export class UserMapper {
    static userEntityFromObject(object: { [key:string]:any}){
        const {id, _id, username, email, password, role} =object;

        if(!_id || !id){
            throw CustomError.badRequest('Missing id');
        }
        if(!username) throw CustomError.badRequest('Missing username');
        if(!email) throw CustomError.badRequest('Missing email');
        if(!password) throw CustomError.badRequest('Missing password');
        if(!role) throw CustomError.badRequest('Missing role');

        return new UserEntity(
            _id || id,
            username,
            email,
            password,
            role
        );
    }
}