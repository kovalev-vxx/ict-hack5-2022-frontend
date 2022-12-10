import {API} from "./index";

export class ApiService {
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
}