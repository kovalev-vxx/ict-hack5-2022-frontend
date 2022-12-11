import React, {FC, useEffect} from 'react';
import {Button, Layout, MenuProps} from "antd";
import LogoIcon from "../static/img/logo.svg";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {logout} from "../store/actions/authActions";

interface AppHeaderProps {
    setIsRegisterModalOpen: (value: boolean)=>void,
    setIsLoginModalOpen:(value: boolean)=>void
}

const AppHeader:FC<AppHeaderProps> = ({setIsRegisterModalOpen, setIsLoginModalOpen}) => {
    const {isAuth} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        if(isAuth){
            setIsRegisterModalOpen(false)
            setIsLoginModalOpen(false)
        }
    }, [isAuth])
    return (
        <div className="header py-2">
            <div className="container mx-auto px-4 max-w-5xl flex gap-2 flex-col justify-between md:flex-row">
                <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
                    <div className="md:pb-1">
                        <Link to={"/"}><img className="h-10" src={LogoIcon} alt="ITMO LOGO"/></Link>
                    </div>

                    <div className="flex justify-between gap-2 items-center">
                        <Link to="/students"><Button>Студенты</Button></Link>
                        <Link to="#"><Button>Компании</Button></Link>
                        <Link to="#"><Button>Проекты</Button></Link>
                    </div>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    {isAuth ?
                        <>
                            <Link to={"/profile"}><Button type="primary">Профиль</Button></Link>
                            <Link to={"/"}><Button onClick={()=>{dispatch(logout())}}>Выйти</Button></Link>
                        </>
                        :
                        <>
                        <Link to={"#"}><Button type="primary" onClick={()=>{setIsLoginModalOpen(true)}}>Войти</Button></Link>
                            <Link to={"#"}><Button type="primary" onClick={()=>{setIsRegisterModalOpen(true)}}>Регистрация</Button></Link>
                        </>}
                </div>
            </div>
        </div>
    );
};

export default AppHeader;
