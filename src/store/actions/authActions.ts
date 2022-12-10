import {AuthService} from "../../API/AuthService";
import {authSlice} from "../slices/AuthSlice";
import {IUser} from "../../models/IUser";
import {AppDispatch} from "../index";

export const register = (username:string, password:string, phone:string, group:string, email:string) => {
    return async (dispatch: AppDispatch) => {
        try {
           dispatch(authSlice.actions.loginIsLoading())
            await AuthService.registerUser(username, password, group, phone, email)
            const {access, refresh} = await AuthService.getToken(username, password)
            const user = await AuthService.getUser(access)
            dispatch(authSlice.actions.loginSuccess({user, token:access}))
        } catch (e) {
            dispatch(authSlice.actions.loginError(e as Error))
        }
    }
}

export const login = (email:string, password:string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(authSlice.actions.loginIsLoading())
            const {access, refresh} = await AuthService.getToken(email, password)
            const user = await AuthService.getUser(access)
            dispatch(authSlice.actions.loginSuccess({user, token:access}))
        } catch (e) {
            dispatch(authSlice.actions.loginError(e))
        }
    }
}

export const initLogin = (token:string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(authSlice.actions.loginIsLoading())
            const user = await AuthService.getUser(token)
            dispatch(authSlice.actions.loginSuccess({user, token}))
        } catch (e) {
            dispatch(authSlice.actions.loginError(e as Error))
        }
    }
}

// export const logout = (token:string) => {
//     return async (dispatch:AppDispatch) => {
//         try {
//             dispatch(authSlice.actions.loginIsLoading())
//             await AuthService.logout(token)
//             dispatch(authSlice.actions.logout())
//         } catch (e) {
//             dispatch(authSlice.actions.loginError(e))
//         }
//     }
// }
