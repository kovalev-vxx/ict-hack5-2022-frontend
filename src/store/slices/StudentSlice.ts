import {IStudent} from "../../models/IStudent";
import {createSlice} from "@reduxjs/toolkit";
import {initialState as AuthInitialState} from "./AuthSlice";


interface StudentState {
    student: IStudent,
    isLoading: boolean
    error:string
}

const initialState: StudentState = {
    student: {first_name: "", family_name: "", city_of_living:"", cv: -1, last_name:"", tags:[], id:-1, gender:"", user: AuthInitialState.user, birthday:"", is_searching:false, isu_number:"", motivation_letter:"" },
    isLoading:false,
    error:""
}

export const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        studentSuccess(state, action){
            state.student = action.payload
            state.isLoading = false
        },
        studentIsLoading(state){
            state.isLoading = true
        },
        studentError(state, action){
            state.isLoading = false
            state.error = action.payload.message
        },
    }
})

export default studentSlice.reducer
