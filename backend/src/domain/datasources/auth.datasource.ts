import { UserEntity } from "../entities/user.entity";
import { RegisterUerDto } from '../dtos/auth/register-user.dto';

// only rules
export abstract class AuthDataSource {
    abstract register(registerUserDto: RegisterUerDto): Promise<UserEntity>
}