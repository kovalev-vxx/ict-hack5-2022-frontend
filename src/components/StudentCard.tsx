import React, {FC, useMemo} from 'react';
import {IStudent} from "../models/IStudent";
import {Avatar, Button, Card} from "antd";
import {EditOutlined, EllipsisOutlined, RightOutlined, SettingOutlined} from "@ant-design/icons";

interface StudentCardProps{
    student: IStudent
}

const { Meta } = Card;



const StudentCard:FC<StudentCardProps> = ({student}) => {
    const tags = useMemo(()=>{
        return student.tags.map(e=>e.name_tag)
    }, [])

    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    style={{objectFit: "contain"}}
                    alt="example"
                    src="https://avatars.githubusercontent.com/u/63135167?v=4"
                />
            }
            actions={[
                <Button icon={<RightOutlined />}>Просмотреть</Button>
            ]}
        >
            <Meta
                title={student.first_name + " " + student.last_name}
                description={tags.join()}
            />
        </Card>
    );
};

export default StudentCard;
