import React from 'react';
import BasePage from "./BasePage";
import {Button, Col, Row, Space} from "antd";

const MainPage = () => {
    return (
        <BasePage>
            <Row justify="space-around" align="middle">
                <Col style={{display:"flex", textAlign:"center", flexDirection:"column", justifyContent:"space-between"}}>
                    <div style={{maxWidth:"576px"}}>
                        <h1 className="mainTitle">ЦИФРОВАЯ ПЛАТФОРМА</h1>
                        <h2>ИТМО X ПИШ</h2>
                    </div>
                        <Row style={{padding:"0 70px"}}>
                            <Col span={12}><Button>Я студент</Button></Col>
                            <Col span={12}><Button>Мы компания</Button></Col>
                        </Row>
                </Col>
            </Row>
        </BasePage>
    );
};

export default MainPage;
