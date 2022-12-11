import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice"
import studentsReducer from "./slices/StudetnsSlice"
import studentReducer from "./slices/StudentSlice"

const rootReducer = combineReducers({
    authReducer,
    studentsReducer,
    studentReducer
})

export const setupStore = () => {
    return configureStore({
        reducer:rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
