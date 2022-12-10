import React, {FC, ReactNode} from 'react';
import {Col, Layout, Menu, Row, theme} from "antd";
import AppHeader from "../components/AppHeader";
import Icon from "@ant-design/icons";
import { ReactComponent as LogoIcon } from "../static/img/logo.svg";


interface BasePageProps {
    children: ReactNode
}

const {Content, Footer} = Layout

const BasePage:FC<BasePageProps> = ({children}) => {

    return (
        <Layout>
            <AppHeader/>
            <Content style={{ padding: '50px 50px', color:"white" }}>{
                children
            }</Content>
            <Footer>footer</Footer>
        </Layout>
    );
};

export default BasePage;
