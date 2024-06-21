import { AuthDataSource, CustomError, RegisterUerDto, UserEntity } from "../../domain";

export class AuthDatasourceImpl implements AuthDataSource {
    async register( registerUserDto: RegisterUerDto): Promise<UserEntity> {
        const {username, email, password} = registerUserDto;
        try{

            return new UserEntity(
                '1',
                username,
                email,
                password,
                ['admin']
            )

        } catch(error){
            if( error instanceof CustomError){
                throw error;
            }

            throw CustomError.internalServerError();
        }
    }
}