import React, {useEffect, useLayoutEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useDispatch} from "react-redux";
import {getStudent} from "../../store/actions/studentActions";
import {Card, Descriptions} from "antd";
import StudentInfoForm from "./StudentInfoForm";


const {Meta} = Card

const StudentProfile = () => {
    const dispatch = useAppDispatch()
    const {student} = useAppSelector(state => state.studentReducer)
    const {user, token} = useAppSelector(state=>state.authReducer)

    useLayoutEffect(()=>{
        dispatch(getStudent(token, user))
    }, [])




    return (
        <>
            <h1>Профиль студента</h1>
            {!student?.first_name && <h1>Вы еще не внесли информацию о себе:</h1>}
            {!student?.first_name && <StudentInfoForm/>}

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
        </>
    );
};

export default StudentProfile;
