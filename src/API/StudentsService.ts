import {API} from "./index";

export class StudentsService{
    static async getStudents(email: string, password: string){
        const response = await API.get("students/")
        return response.data.results
    }
}
