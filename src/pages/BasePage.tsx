import React, {FC, ReactNode, useCallback} from 'react';
import {Col, Layout, Menu, Row, theme} from "antd";
import AppHeader from "../components/AppHeader";
import Icon from "@ant-design/icons";
import { ReactComponent as LogoIcon } from "../static/img/logo.svg";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";


interface BasePageProps {
    children: ReactNode
}

const {Content, Footer} = Layout

const BasePage:FC<BasePageProps> = ({children}) => {


    return (
        <>
            <Layout>
                <AppHeader/>
                <Content style={{ padding: '50px 50px', color:"white" }}>{
                    children
                }</Content>
                <Footer className="z-10">footer</Footer>
            </Layout>
        </>


    );
};

export default BasePage;
