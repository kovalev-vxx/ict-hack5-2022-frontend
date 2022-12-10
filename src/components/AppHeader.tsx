import React from 'react';
import {Col, Layout, Menu, MenuProps, Row, Space} from "antd";
import Logo from "./Logo";
import Icon from '@ant-design/icons';
import { ReactComponent as LogoIcon } from "../static/img/logo.svg";

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const {Header} = Layout

const AppHeader = () => {
    return (
        <Header className="header">
            <Row justify="space-around" align="middle">
                    <Col span={4}>
                        <Row align="middle">
                            <Icon component={LogoIcon} style={{ fontSize: '80px'}}/>
                        </Row>
                    </Col>
                    <Col span={16}>
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            items={new Array(15).fill(null).map((_, index) => {
                                const key = index + 1;
                                return {
                                    key,
                                    label: `nav ${key}`,
                                };
                            })}
                        />
                    </Col>
            </Row>
        </Header>
    );
};

export default AppHeader;
