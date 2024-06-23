export class CreateThematicDto{
    private constructor(
        public nameThematic: string,
        public permissions: [string]
    ){}

    static create(object:{[key:string]:any}):[string?, CreateThematicDto?]{
        const {nameThematic, permissions} = object;
        if(!nameThematic) return ['The name of thematic is required']
        return[undefined,
            new CreateThematicDto(nameThematic, permissions)
        ]
    }
}