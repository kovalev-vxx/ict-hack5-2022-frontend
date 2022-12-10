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
                <Content className="container mx-auto px-4 max-w-5xl flex flex-col gap-2 text-white">{
                    children
                }</Content>
                <Footer className="z-10">footer</Footer>
            </Layout>
        </>


    );
};

export default BasePage;
