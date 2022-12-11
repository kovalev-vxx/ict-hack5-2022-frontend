import {createSlice} from "@reduxjs/toolkit";
import {initialState as AuthInitialState} from "./AuthSlice";
import {ICompany} from "../../models/ICompany";


interface CompanyState {
    company: ICompany
    isLoading: boolean
    error:string
}

const initialState: CompanyState = {
    company: {name_company:"", id:-1, address:"", user:AuthInitialState.user, logo:""},
    isLoading:false,
    error:""
}

export const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {
        companySuccess(state, action){
            state.company = action.payload
            state.isLoading = false
        },
        companyIsLoading(state){
            state.isLoading = true
        },
        companyError(state, action){
            state.isLoading = false
            state.error = action.payload.message
        },
    }
})

export default companySlice.reducer
