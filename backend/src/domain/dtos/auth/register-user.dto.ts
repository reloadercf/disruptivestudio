import { Validators } from "../../../config";

export class RegisterUerDto{
    private constructor(
        public username: string,
        public email: string,
        public password: string,
    ){}
    static create(object: {[key:string]: any}):[string?, RegisterUerDto?]{
        const { username, email, password} = object;
        if(!username) return ['username is required'];
        if(!email) return ['Missing email'];
        if(!Validators.email.test(email)) return ['Invalid email']
        if(!password) return ['Missing password']
        if(password.length <5) return ['Password short']

        return [undefined,
            new RegisterUerDto(username, email, password)
        ]
    }
}