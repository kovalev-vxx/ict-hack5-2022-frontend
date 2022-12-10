import React, {FC, ReactNode, useCallback, useState} from 'react';
import {Button, Checkbox, Col, Form, Input, Layout, Menu, Modal, Row, theme} from "antd";
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
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [group, setGroup] = useState("")



    return (
        <>
            <Modal title="Регистрация" open={isRegisterModalOpen} onOk={()=>{setIsRegisterModalOpen(false)}} onCancel={()=>{setIsRegisterModalOpen(false)}} footer={[]}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Modal title="Вход" open={isLoginModalOpen} onOk={()=>{setIsLoginModalOpen(false)}} onCancel={()=>{setIsLoginModalOpen(false)}} footer={[]}>
            </Modal>
            <Layout>

                <AppHeader setIsLoginModalOpen={setIsLoginModalOpen}  setIsRegisterModalOpen={setIsRegisterModalOpen}/>
                <Content className="container mx-auto px-4 max-w-5xl flex flex-col gap-2 text-white">{
                    children
                }</Content>
                <Footer className="z-10">footer</Footer>
            </Layout>
        </>


    );
};

export default BasePage;
