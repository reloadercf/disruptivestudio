import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";
import { AuthDataSource, CustomError, RegisterUerDto, UserEntity } from "../../domain";
import { UserMapper } from "../mappers/user.mapper";

type HashFunction =( password: string) => string;
type CompareFunction = (password: string, hashed: string)=> boolean;

export class AuthDatasourceImpl implements AuthDataSource {

    constructor(
        private readonly hashPassword: HashFunction = BcryptAdapter.hash,
        private readonly comparePassword: CompareFunction = BcryptAdapter.compare
    ){}

    async register( registerUserDto: RegisterUerDto): Promise<UserEntity> {
        const {username, email, password, role} = registerUserDto;
        console.log('ya llegue')
        try{
            const isEmailExist = await UserModel.findOne({email})
            const isUserNameExist = await UserModel.findOne({username})

            if(isEmailExist || isUserNameExist) throw CustomError.badRequest('User exist')
            
            const user = await UserModel.create({
                username,
                email,
                password: this.hashPassword(password),
                role
            })

            await user.save()

            return UserMapper.userEntityFromObject(user);

        } catch(error){
            if( error instanceof CustomError){
                throw error;
            }

            throw CustomError.internalServerError();
        }
    }
}