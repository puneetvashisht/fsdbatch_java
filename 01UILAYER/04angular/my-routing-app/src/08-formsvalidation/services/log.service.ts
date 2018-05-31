import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

    logs: Array<string> = []
    
    constructor() { }

    log(message: string){
        this.logs.push(message);
    }
    
    fetchLogs(){
        return this.logs
    }

}