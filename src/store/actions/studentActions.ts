import {AppDispatch} from "../index";
import {studentsSlice} from "../slices/StudetnsSlice";
import {StudentsService} from "../../API/StudentsService";
import {studentSlice} from "../slices/StudentSlice";
import {IUser} from "../../models/IUser";

export const getStudent = (token:string, user: IUser) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(studentSlice.actions.studentIsLoading())
            const response = await StudentsService.getStudents(token)
            console.log(response.data)
            dispatch(studentSlice.actions.studentSuccess(response.data.results.find((e:any)=>(e.user.id===user.id))))
        } catch (e) {
            dispatch(studentSlice.actions.studentError(e as Error))
        }
    }
}
