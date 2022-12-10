import React, {FC, ReactNode} from 'react';
import {Layout, theme} from "antd";
import {Content, Footer, Header} from "antd/lib/layout/layout";
import AppHeader from "../components/AppHeader";


interface BasePageProps {
    children: ReactNode
}

const BasePage:FC<BasePageProps> = ({children}) => {

    return (
        <Layout>
            <AppHeader/>
            <Layout>
                <Content>{
                    children
                }</Content>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
    );
};

export default BasePage;
