import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {API} from "../API";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {Descriptions} from "antd";
import {useDispatch} from "react-redux";
import {studentSlice} from "../store/slices/StudentSlice";

const Student = () => {
    const {id} =  useParams<{id?: string}>()
    const {token} = useAppSelector(state=>state.authReducer)
    const [student, setStudent] = useState<any>({})
    useEffect(()=>{
        const response = API.get(`students/${id}/`, {
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        setStudent(response)
    }, [])

    return (
        <>
            <Descriptions>
                <Descriptions.Item label="Имя">{student.first_name}</Descriptions.Item>
                <Descriptions.Item label="Фамилия">{student.last_name}</Descriptions.Item>
                <Descriptions.Item label="Отчество">{student.family_name}</Descriptions.Item>
                <Descriptions.Item label="Город">{student.city_of_living}</Descriptions.Item>
                <Descriptions.Item label="Дата рождения">{student.birthday}</Descriptions.Item>
                {/*<Descriptions.Item label="Телефон">{student.user.phone}</Descriptions.Item>*/}
            </Descriptions>


        </>
    );
};

export default Student;
