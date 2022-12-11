import {IUser} from "./IUser";

export interface ICompany{
    id:number,
    name_company:string,
    address:string,
    logo:string,
    user:IUser
}
