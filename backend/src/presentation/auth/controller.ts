import { Request, response, Response } from "express"
import { AuthRepository, CustomError, RegisterUerDto } from "../../domain"

export class AuthCOntroller {
    constructor(
        private readonly authRepository: AuthRepository,
    ){}

    private handleError = ( error: unknown, res: Response) =>{
        if(error instanceof CustomError){
            return res.status(error.statuscode).json({error: error.message})
        }
        console.log(error);
        return res.status(500).json({error: 'Internal server error'})
    }

    registerUser = (req:Request, res: Response)=>{
        const [error, registerUserDto] = RegisterUerDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.authRepository.register(registerUserDto!)
        .then(user=>res.json(user))
        .catch(error => this.handleError(error, res))
        
    }

    loginUser = (req:Request, res: Response) =>{
        res.json('login user correct')
    }
}