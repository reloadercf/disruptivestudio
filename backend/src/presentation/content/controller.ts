import { Request, Response } from 'express';
import { ContentRepository, CreateThematicDto } from '../../domain';

export class ThematicController{
    constructor(
        private readonly contentRepository: ContentRepository
    ){}

    createThematic = (req: Request, res: Response) =>{
        const [error, createThematicDto] = CreateThematicDto.create(req.body);
        if(error) return res.status(400).json({error})
        
        this.contentRepository.register(createThematicDto!)
        .then(thematic=>res.json(thematic))
        .catch(err=>res.status(500).json(err))
    }

}