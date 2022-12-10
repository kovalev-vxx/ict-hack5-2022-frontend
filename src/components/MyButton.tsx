import React, {FC} from 'react';
import {ApiService} from "../API/ApiService";

interface MyButtonProps{
    setToken: any
    username: string
    password: string
}

const MyButton:FC<MyButtonProps> = ({setToken, username, password}) => {

    const getToken = async () => {
        const {access, refresh} = await ApiService.getToken(username, password)
        setToken(access)
    }

    return (
        <button onClick={getToken}>
            Log in
        </button>
    );
};

export default MyButton;