import {IUser} from "../../models/IUser";
import {AppDispatch} from "../index";
import {companySlice} from "../slices/CompanySlice";
import {CompaniesService} from "../../API/CompaniesService";

export const getCompany = (token:string, user: IUser) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(companySlice.actions.companyIsLoading())
            const response = await CompaniesService.getCompanies(token)
            console.log(response.data)
            dispatch(companySlice.actions.companySuccess(response.data.results.find((e:any)=>(e.user.id===user.id))))
        } catch (e) {
            dispatch(companySlice.actions.companyError(e as Error))
        }
    }
}
