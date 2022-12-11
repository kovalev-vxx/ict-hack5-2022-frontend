import React, {FC, useMemo} from 'react';
import {Button, Card} from "antd";
import {RightOutlined} from "@ant-design/icons";
import {ICompany} from "../models/ICompany";

interface CompanyCardProps{
    company: ICompany
}

const { Meta } = Card;



const CompanyCard:FC<CompanyCardProps> = ({company}) => {
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    style={{objectFit: "contain"}}
                    alt="example"
                    src={company.logo}
                />
            }
            actions={[
                <Button icon={<RightOutlined />}>Просмотреть</Button>
            ]}
        >
            <Meta
                title={company.name_company}
                // description={tags.join()}
            />
        </Card>
    );
};

export default CompanyCard;
