import React, {FC, ReactNode, useCallback, useState} from 'react';
import {Button, Checkbox, Col, Form, Input, Layout, Menu, Modal, Row, Select, Spin, theme} from "antd";
import AppHeader from "../components/AppHeader";
import Icon from "@ant-design/icons";
import { ReactComponent as LogoIcon } from "../static/img/logo.svg";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {login, register} from "../store/actions/authActions";


interface BasePageProps {
    children: ReactNode
}

const {Content, Footer} = Layout

const BasePage:FC<BasePageProps> = ({children}) => {
    const dispatch = useAppDispatch()
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const {Option} = Select
    const {isLoading} = useAppSelector(state => state.authReducer)

    const onRegister = (values: any) => {
        dispatch(register(values.username, values.password, values.phone, values.group, values.email))
    };

    const onLogin = (values: any) => {
        dispatch(login(values.email, values.password))
    };




    return (
        <>
            <Modal title="Регистрация" open={isRegisterModalOpen} onOk={()=>{setIsRegisterModalOpen(false)}} onCancel={()=>{setIsRegisterModalOpen(false)}} footer={[]}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onRegister}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Логин"
                        name="username"
                        rules={[{ required: true, message: 'Введите имя пользователя!' }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Введите Email!' }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Телефон"
                        name="phone"
                        rules={[{ required: true, message: 'Введите номер телефона!', }]}
                    >
                        <Input defaultValue="+7"/>
                    </Form.Item>

                    <Form.Item name="group" label="Роль" rules={[{required:true, message: "Выберете роль!"}]}>
                        <Select
                        placeholder="Кто вы?">
                            <Option value="S">Студет</Option>
                            <Option value="C">Компания</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[{ required: true, message: 'Введите пароль!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <div className="flex gap-4 items-center">
                            <Button type="primary" htmlType="submit">
                                Зарегистрироваться
                            </Button>
                            {isLoading && <Spin/>}
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
            <Modal title="Вход" open={isLoginModalOpen} onOk={()=>{setIsLoginModalOpen(false)}} onCancel={()=>{setIsLoginModalOpen(false)}} footer={[]}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onLogin}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Введите Email!' }]}
                    >
                        <Input/>
                    </Form.Item>



                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[{ required: true, message: 'Введите пароль!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <div className="flex gap-4 items-center">
                            <Button type="primary" htmlType="submit">
                                Войти
                            </Button>
                            {isLoading && <Spin/>}
                        </div>
                    </Form.Item>

                </Form>
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
