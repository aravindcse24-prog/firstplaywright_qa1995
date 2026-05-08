import { ApiClient } from "./apiclient";

export class ApiUser{
constructor(private api:ApiClient){
}

async getUser(id:number){

    return await this.api.get('/users/${id}');
}

async createUser(data:any){

    return await this.api.post('/users', data);
}

}