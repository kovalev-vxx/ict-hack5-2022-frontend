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

    static async getToken(email: string, password: string){
        const response = await API.post("auth/token/", {
            email, password
        }, )
        return response.data
    }

    static async registerUser(username:string, password:string, group:string, phone:string, email:string){
        const response = await API.post("auth/users/", {
            username, password, group, phone, email
        }, )
        return response.data
    }
}
