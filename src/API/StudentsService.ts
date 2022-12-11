import {API} from "./index";

export class StudentsService{
    static async getStudents(token:string, ordering?:string){
        let response: any = ""

        if(ordering){
            response = await API.get("sorted_student_by/", {
                params: {
                    ordering
                },
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            })
            response = response.data.results.map((e:any)=>(e.identification_student))
        } else {
            response = await API.get("students/", {
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            })
        }

        return response
    }
}
