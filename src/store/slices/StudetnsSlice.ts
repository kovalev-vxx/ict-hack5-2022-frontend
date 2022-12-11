import {createSlice} from "@reduxjs/toolkit";
import {IStudent} from "../../models/IStudent";


interface StudentsState {
    students: IStudent[],
    sortedByWorkSpeed: IStudent[],
    sortedByCommunication: IStudent[],
    sortedByTechPart: IStudent[],
    isLoading: boolean
    error:string
}

const initialState: StudentsState = {
    students: [],
    sortedByCommunication:[],
    sortedByTechPart:[],
    sortedByWorkSpeed:[],
    isLoading:false,
    error:""
}

export const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        studentsSuccess(state, action){
            state.students = action.payload
            state.isLoading = false
        },
        studentsSortedByWorkSpeed(state, action){
            state.sortedByWorkSpeed = action.payload
            state.isLoading = false
        },
        studentsSortedByCommunication(state, action){
            state.sortedByCommunication = action.payload
            state.isLoading = false
        },
        studentsSortedByTechPart(state, action){
            state.sortedByTechPart = action.payload
            state.isLoading = false
        },
        studentsAreLoading(state){
            state.isLoading = true
        },
        studentsError(state, action){
            state.isLoading = false
            state.error = action.payload.message
        },
    }
})

export default studentsSlice.reducer
