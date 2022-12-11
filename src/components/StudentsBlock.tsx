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
        <div className="flex flex-wrap gap-10">
            {students.slice(0,6).map(e=>{
                return <StudentCard student={e}/>
            })}
        </div>
    );
};

export default StudentsBlock;
