import React from 'react';
import BasePage from "./BasePage";
import {Button, Col, Row, Space} from "antd";

const MainPage = () => {
    return (
        <BasePage>
            <Row justify="space-around" align="middle">
                {/*style={{display:"flex", textAlign:"center", flexDirection:"column", justifyContent:"space-between"}}*/}
                <Col className="flex-col text-center justify-center" >
                    <div style={{maxWidth:"576px"}}>
                        <h1 className="mainTitle">ЦИФРОВАЯ ПЛАТФОРМА</h1>
                        <h2>ИТМО X ПИШ</h2>
                    </div>
                    <div className="flex justify-center gap-5">
                        <Button>Я студент</Button>
                        <Button>Мы компания</Button>
                    </div>
                </Col>
            </Row>
        </BasePage>
    );
};

export default MainPage;
