import { Server } from "./presentation/server"
import { envs } from "./config"
import { AppRoutes } from "./presentation/routes"

(()=>{
    main()
})()

async function main (){
    console.log('init')
    new Server({
        port:envs.PORT,
        routes: AppRoutes.routes
    }).start()
}