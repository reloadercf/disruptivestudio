import express, { Router } from 'express';
import cors from 'cors';

interface Options{
    port?:number;
    routes: Router,
    public_path?: string;
}

export class Server{

    public readonly app = express();

    private readonly port: number;

    private readonly routes: Router

    private readonly publicPath: string;
    
    constructor(options: Options){
        const {port = 3100, routes, public_path = 'public'} = options;
        this.port = port;
        this.routes = routes;
        this.publicPath = public_path;
    }
    async start(){
        // middlewares
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
        this.app.use(cors())

        // use route defined
        this.app.use(this.routes)

        //Public Folder
        this.app.use(express.static(this.publicPath))

        this.app.listen(this.port, ()=>{
            console.log(`server runing in the port ${this.port}`)
        })

    }
}