import ApiService, {AuthService} from "../../API/AuthService";
import {authSlice} from "../slices/AuthSlice";
import {IUser} from "../../models/IUser";
import {AppDispatch} from "../index";

export const register = (username:string, password:string) => {
    return async (dispatch: AppDispatch) => {
        try {
           dispatch(authSlice.actions.loginIsLoading())
            await AuthService.registerUser()
            const token = await ApiService.getToken()
            const user = await ApiService.getUser(token)
            dispatch(authSlice.actions.loginSuccess({user, token}))
        } catch (e) {
            dispatch(authSlice.actions.loginError(e))
        }
    }
}

export const login = (username, password) => {
    return async (dispatch) => {
        try {
            dispatch(authSlice.actions.loginIsLoading())
            const token = await ApiService.getToken(username, password)
            const user = await ApiService.getUser(token)
            dispatch(authSlice.actions.loginSuccess({user, token}))
        } catch (e) {
            dispatch(authSlice.actions.loginError(e))
        }
    }
}

export const initLogin = (token) => {
    return async (dispatch) => {
        try {
            dispatch(authSlice.actions.loginIsLoading())
            const user = await ApiService.getUser(token)
            dispatch(authSlice.actions.loginSuccess({user, token}))
        } catch (e) {
            dispatch(authSlice.actions.loginError(e))
        }
    }
}

export const logout = (token) => {
    return async (dispatch) => {
        try {
            dispatch(authSlice.actions.loginIsLoading())
            await ApiService.logout(token)
            dispatch(authSlice.actions.logout())
        } catch (e) {
            dispatch(authSlice.actions.loginError(e))
        }
    }
}
