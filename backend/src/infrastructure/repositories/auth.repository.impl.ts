import { AuthDataSource, AuthRepository, RegisterUerDto, UserEntity } from "../../domain";

export class AuthRepositoryImpl implements AuthRepository{
    constructor(
        private readonly authDatasource: AuthDataSource,
    ){}
    register(registerUserDto: RegisterUerDto): Promise<UserEntity> {
        return this.authDatasource.register(registerUserDto)
    }

}