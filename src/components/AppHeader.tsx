import React, {FC} from 'react';
import {Button, Col, Layout, Menu, MenuProps, Row, Space} from "antd";
import Logo from "./Logo";
import Icon from '@ant-design/icons';
import { ReactComponent as LogoIcon } from "../static/img/logo.svg";
import { ReactComponent as PishIcon } from "../static/img/pish_logo.svg";
import {Link} from "react-router-dom";


const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const {Header} = Layout

interface AppHeaderProps {
    setIsRegisterModalOpen: (value: boolean)=>void,
    setIsLoginModalOpen:(value: boolean)=>void
}

const AppHeader:FC<AppHeaderProps> = ({setIsRegisterModalOpen, setIsLoginModalOpen}) => {
    return (
        <Header className="header z-10">
            <Row gutter={16} justify="space-around" align="middle">
                <Col span={4}>
                    <Row align="middle">
                        <Icon component={LogoIcon} style={{ fontSize: '150px', position:"absolute"}}/>
                    </Row>
                </Col>
                <Col span={16} className="flex justify-between items-end">
                    <Link to="#">Студенты</Link>
                    <Link to="#">Компании</Link>
                    <Link to="#">Проекты</Link>
                    <Link to="#">Биржа</Link>
                    <Button type="primary" onClick={()=>{setIsLoginModalOpen(true)}}>Войти</Button>
                    <Button type="primary" onClick={()=>{setIsRegisterModalOpen(true)}}>Регистрация</Button>
                </Col>
            </Row>
        </Header>
    );
};

export default AppHeader;
