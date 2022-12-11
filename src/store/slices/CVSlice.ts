import {ICv} from "../../models/ICv";
import {createSlice} from "@reduxjs/toolkit";

interface CVState{
    cv: ICv
    isLoading:boolean
    error:string
}

export const initialState: CVState = {
    cv: {faculty: "", id:-1, data_of_end_degree:"", degree:"", experience:"", hard_skills:"", soft_skills:"", photo:"", name_of_study_institution:"", status_of_check:""},
    isLoading:false,
    error: ""
}

export const cvSlice = createSlice({
    name: "cv",
    initialState,
    reducers: {
        cvSuccess(state, action){
            state.cv = action.payload
            state.isLoading = false
        },
        cvIsLoading(state){
            state.isLoading = true
        },
        cvError(state, action){
            state.isLoading = false
            state.error = action.payload.message
        },
    }
})

export default cvSlice.reducer
