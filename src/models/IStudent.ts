import {IUser} from "./IUser";
import {ITag} from "./ITag";

export interface IStudent {
    id: number,
    gender:string,
    first_name:string,
    last_name:string,
    family_name:string,
    birthday: string,
    city_of_living:string,
    isu_number:string,
    is_searching:boolean,
    motivation_letter:string,
    cv:number,
    user: IUser,
    tags: ITag[]
}
