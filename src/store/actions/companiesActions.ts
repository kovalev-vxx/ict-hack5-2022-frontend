import {AppDispatch} from "../index";
import {companiesSlice} from "../slices/CompaniesSlice";
import {CompaniesService} from "../../API/CompaniesService";

export const getCompanies = (token:string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(companiesSlice.actions.companiesAreLoading())
            const response = await CompaniesService.getCompanies(token)
            dispatch(companiesSlice.actions.companiesSuccess(response.data.results))
        } catch (e) {
            dispatch(companiesSlice.actions.companiesError(e as Error))
        }
    }
}

