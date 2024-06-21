import { Server } from "./presentation/server"
import { envs } from "./config"
import { AppRoutes } from "./presentation/routes"
import { MongoDatabase } from "./data/mongodb"

(()=>{
    main()
})()

async function main (){
    await MongoDatabase.connect({mongoUrl:envs.MONGO_URL, dbName:envs.DATABASE });

    console.log('init')
    new Server({
        port:envs.PORT,
        routes: AppRoutes.routes
    }).start()
}