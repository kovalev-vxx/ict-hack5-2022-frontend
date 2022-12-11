import React, {FC} from 'react';
import {Avatar, Card} from "antd";
import {IUser} from "../models/IUser";
import {IStudent} from "../models/IStudent";
import StudentCard from "./StudentCard";

interface StudentsBlockProps {
    students: IStudent[]
}

const StudentsBlock:FC<StudentsBlockProps> = ({students}) => {
    return (
        <>
            {students.map(e=>{
                return <StudentCard student={e}/>
            })}
        </>
    );
};

export default StudentsBlock;
