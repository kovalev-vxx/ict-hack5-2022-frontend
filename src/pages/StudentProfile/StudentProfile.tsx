import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useDispatch} from "react-redux";
import {getStudent} from "../../store/actions/studentActions";
import {Card, Descriptions, Button, Form, Input, Select, Spin, Modal} from "antd";
import StudentInfoForm from "./StudentInfoForm";
import TextArea from "antd/lib/input/TextArea";
import {useParams} from "react-router-dom";


const {Meta} = Card

const StudentProfile = () => {
    const dispatch = useAppDispatch()
    const {student} = useAppSelector(state => state.studentReducer)
    const {user, token} = useAppSelector(state=>state.authReducer)
    const [isCVOpen, setIsCVOpen] = useState(false)

    const {id} =  useParams<{id?: string}>()



    const sendSV = (values: any) => {

    }

    useLayoutEffect(()=>{
        dispatch(getStudent(token, user))
    }, [])




    return (
        <>
            <h1>Профиль студента</h1>
            {!student?.first_name && <h1>Вы еще не внесли информацию о себе:</h1>}
            {!student?.first_name && <StudentInfoForm/>}
            {!student?.cv?.degree && <Button onClick={()=>{setIsCVOpen(true)}} type="primary">Заполнить CV</Button>}

            <Modal title="Резюме" open={isCVOpen} onOk={()=>{setIsCVOpen(false)}} onCancel={()=>{setIsCVOpen(false)}} footer={[]}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={sendSV}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Hard Skills"
                        name="hard_skills"
                        rules={[{ required: true}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Soft Skills"
                        name="soft_skills"
                        rules={[{ required: true}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="ВУЗ"
                        name="name_of_study_institution"
                        rules={[{ required: true}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Ступень"
                        name="degree"
                        rules={[{ required: true}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Факультет"
                        name="faculty"
                        rules={[{ required: true}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Фото"
                        name="photo"
                        rules={[{ required: true}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Опыт"
                        name="experience"
                        rules={[{ required: true}]}
                    >
                        <TextArea className="bg-black"/>
                    </Form.Item>




                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <div className="flex gap-4 items-center">
                            <Button type="primary" htmlType="submit">
                                Зарегистрироваться
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>

            {student && <>
                <Descriptions>
                    <Descriptions.Item label="Имя">{student.first_name}</Descriptions.Item>
                    <Descriptions.Item label="Фамилия">{student.last_name}</Descriptions.Item>
                    <Descriptions.Item label="Отчество">{student.family_name}</Descriptions.Item>
                    <Descriptions.Item label="Город">{student.city_of_living}</Descriptions.Item>
                    <Descriptions.Item label="Дата рождения">{student.birthday}</Descriptions.Item>
                    <Descriptions.Item label="Телефон">{student.user.phone}</Descriptions.Item>
                </Descriptions>
            </>}


            {student?.cv && <>
                <Descriptions title="CV">
                    <Descriptions.Item label="Харды">{student.cv.hard_skills}</Descriptions.Item>
                    <Descriptions.Item label="Софты">{student.cv.soft_skills}</Descriptions.Item>
                    <Descriptions.Item label="Ступень">{student.cv.degree}</Descriptions.Item>
                    <Descriptions.Item label="ВУЗ">{student.cv.name_of_study_institution}</Descriptions.Item>
                    <Descriptions.Item label="Факультет">{student.cv.faculty}</Descriptions.Item>
                    <Descriptions.Item label="Опыт">{student.cv.experience}</Descriptions.Item>
                </Descriptions>
            </>}
        </>
    );
};

export default StudentProfile;
