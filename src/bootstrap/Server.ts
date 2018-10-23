import * as express from "express"
import {app} from "./App";

export class Server{
    port : string = "3000";
    appName: string = "Sample app";
    constructor(){
        this.startServer();
    }

    startServer(){
        app.listen(this.port, () => console.log(`${this.appName} listening on port ${this.port}!`));
    }
}

new Server();