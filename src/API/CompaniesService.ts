import {API} from "./index";

export class CompaniesService{

    static async getCompanies(token:string){
        const response = await API.get("all_company/", {
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        return response
    }
}
