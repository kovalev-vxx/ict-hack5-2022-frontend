import {AppDispatch} from "../index";
import {AuthService} from "../../API/AuthService";
import {studentsSlice} from "../slices/StudetnsSlice";
import {StudentsService} from "../../API/StudentsService";

export const getStudents = (token:string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(studentsSlice.actions.studentsAreLoading())
            const response = await StudentsService.getStudents(token)
            dispatch(studentsSlice.actions.studentsSuccess(response))
        } catch (e) {
            dispatch(studentsSlice.actions.studentsError(e as Error))
        }
    }
}

export const getSortedStudentsByWorkSpeed = (token:string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(studentsSlice.actions.studentsAreLoading())
            const response = await StudentsService.getStudents(token, "-word_speed")
            dispatch(studentsSlice.actions.studentsSortedByWorkSpeed(response))
        } catch (e) {
            dispatch(studentsSlice.actions.studentsError(e as Error))
        }
    }
}

export const getSortedStudentsByCommunication = (token:string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(studentsSlice.actions.studentsAreLoading())
            const response = await StudentsService.getStudents(token, "-communication")
            dispatch(studentsSlice.actions.studentsSortedByCommunication(response))
        } catch (e) {
            dispatch(studentsSlice.actions.studentsError(e as Error))
        }
    }
}

export const getSortedStudentsByTechPart= (token:string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(studentsSlice.actions.studentsAreLoading())
            const response = await StudentsService.getStudents(token, "-tech_part")
            dispatch(studentsSlice.actions.studentsSortedByTechPart(response))
        } catch (e) {
            dispatch(studentsSlice.actions.studentsError(e as Error))
        }
    }
}
