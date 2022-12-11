import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";


interface AuthState {
    user: IUser,
    token: string,
    isLoading: boolean,
    isAuth:boolean,
    error: string
}

export const initialState: AuthState = {
    user: {username:"", email:"", group:"", id:-1, phone:"", is_staff:false},
    token: localStorage.getItem("token") ?? "",
    isLoading: false,
    isAuth: false,
    error: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action){
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoading = false
            state.isAuth = true
            localStorage.setItem("token", action.payload.token)
            state.error = ""
        },
        loginIsLoading(state){
            state.isLoading = true
        },
        loginError(state, action){
            state.isLoading = false
            state.isAuth = false
            state.error = action.payload.message
            state.user = {username:"", email:"", group:"", id:-1, phone:"", is_staff:false}
            state.token = ""
        },
        logout(state){
            state.isLoading = false
            state.isAuth = false
            state.user = {username:"", email:"", group:"", id:-1, phone:"", is_staff:false}
            state.token = ""
            state.error = ""
            localStorage.removeItem("token")
        }
    }
})

export default authSlice.reducer
