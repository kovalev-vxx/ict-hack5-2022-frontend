import {createSlice} from "@reduxjs/toolkit";
import {ICompany} from "../../models/ICompany";

interface CompaniesState {
    companies: ICompany[],
    isLoading: boolean
    error:string
}

const initialState: CompaniesState = {
    companies: [],
    isLoading:false,
    error:""
}

export const companiesSlice = createSlice({
    name: "companies",
    initialState,
    reducers: {
        companiesSuccess(state, action){
            state.companies = action.payload
            state.isLoading = false
        },
        companiesAreLoading(state){
            state.isLoading = true
        },
        companiesError(state, action){
            state.isLoading = false
            state.error = action.payload.message
        },
    }
})

export default companiesSlice.reducer
