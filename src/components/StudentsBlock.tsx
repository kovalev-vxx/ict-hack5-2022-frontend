import React, {FC, useMemo} from 'react';
import {Avatar, Card} from "antd";
import {IUser} from "../models/IUser";
import {IStudent} from "../models/IStudent";
import StudentCard from "./StudentCard";

interface StudentsBlockProps {
    students: IStudent[]
}

const StudentsBlock:FC<StudentsBlockProps> = ({students}) => {


    const sts = useMemo(()=>{

        const ids:number[] = []
        const studs:IStudent[] = []

        students.forEach((e)=>{
            if(!ids.includes(e.id)){
                studs.push(e)
                ids.push(e.id)
            }
        })

        return studs
    }, [])





    return (
        <div className="flex flex-wrap gap-10 justify-center items-center">
            {sts.slice(0,6).map(e=>{
                return <StudentCard student={e}/>
            })}
        </div>
    );
};

export default StudentsBlock;
