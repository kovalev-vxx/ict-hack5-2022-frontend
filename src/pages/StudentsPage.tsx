import React, {useEffect} from 'react';
import BasePage from "./BasePage";
import {Carousel} from "antd";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {
    getSortedStudentsByCommunication, getSortedStudentsByTechPart,
    getSortedStudentsByWorkSpeed,
    getStudents
} from "../store/actions/studentsActions";
import StudentsBlock from "../components/StudentsBlock";

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const StudentsPage = () => {
    const {students, sortedByCommunication, sortedByTechPart, sortedByWorkSpeed} = useAppSelector(state => state.studentsReducer)
    const {token} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()


    useEffect(()=>{
        dispatch(getSortedStudentsByWorkSpeed(token))
        dispatch(getSortedStudentsByCommunication(token))
        dispatch(getSortedStudentsByTechPart(token))
    }, [])

    return (
        <BasePage>
            <div>
                <h1>Самые компетентные</h1>
                <StudentsBlock students={sortedByTechPart}/>
            </div>
            <div>
                <h1>Самые пунктуальные</h1>
                <StudentsBlock students={sortedByWorkSpeed}/>
            </div>
            <div>
                <h1>Самые гибкие</h1>
                <StudentsBlock students={sortedByCommunication}/>
            </div>

        </BasePage>
    );
};

export default StudentsPage;
