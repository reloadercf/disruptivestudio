import { Request, Response } from "express"
import { RegisterUerDto } from "../../domain"

export class AuthCOntroller {
    constructor(){}
    
    registerUser = (req:Request, res: Response)=>{
        const [error, registerUserDto] = RegisterUerDto.create(req.body)
        if(error) return res.status(400).json({error})
        res.json(registerUserDto)
        
    }

    loginUser = (req:Request, res: Response) =>{
        res.json('login user correct')
    }
}