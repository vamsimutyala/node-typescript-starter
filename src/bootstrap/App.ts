import * as express from "express";


class App{
    app : express.Application;
    constructor(){
        this.app = express();
    }

    registerLogger(){

    }

    registerMiddleWare(){

    }

    registerRoutes(){

    }

}

export let app = new App().app;