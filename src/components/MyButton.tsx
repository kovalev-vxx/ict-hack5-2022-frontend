import React, {FC} from 'react';
import {AuthService} from "../API/AuthService";

interface MyButtonProps{
    setToken: any
    username: string
    password: string
}

const MyButton:FC<MyButtonProps> = ({setToken, username, password}) => {

    const getToken = async () => {
        const {access, refresh} = await AuthService.getToken(username, password)
        setToken(access)
    }

    return (
        <button onClick={getToken}>
            Log in
        </button>
    );
};

export default MyButton;
