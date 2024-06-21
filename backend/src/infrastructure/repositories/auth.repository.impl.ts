import { AuthDataSource, AuthRepository, RegisterUerDto, UserEntity } from "../../domain";

export class AuthRepositoryImpl implements AuthRepository{
    constructor(
        private readonly authDatasource: AuthDataSource,
    ){}
    register(registerUserDto: RegisterUerDto): Promise<UserEntity> {
        throw new Error("Method not implemented.");
        return this.authDatasource.register(registerUserDto)
    }

}