import {API} from "./index";
import {IUser} from "../models/IUser";

export class AuthService {
    static async getUser(token: string){
        const response = await API.get("auth/users/me/", {
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        return response.data
    }

    static async getToken(username: string, password: string){
        const response = await API.post("auth/token/", {
            username, password
        }, )
        return response.data
    }

    static async registerUser(username:string, password:string, group:string, number:string){
        const response = await API.post("auth/token/", {
            username, password, group, number
        }, )
        return response.data
    }
}
