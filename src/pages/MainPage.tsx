import React, {useCallback, useState} from 'react';
import BasePage from "./BasePage";
import {Button, Col, Modal, Row, Space} from "antd";
import Particles from "react-tsparticles";
import {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import { useNavigate } from "react-router-dom";


const MainPage = () => {
    const navigate = useNavigate();

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);



    return (
        <BasePage>
            <>
                <div>
                    <Row justify="space-around" align="middle">
                        {/*style={{display:"flex", textAlign:"center", flexDirection:"column", justifyContent:"space-between"}}*/}
                        <Col className="flex-col text-center justify-center" >
                            <div style={{maxWidth:"576px"}}>
                                <h1 className="mainTitle">ЦИФРОВАЯ ПЛАТФОРМА</h1>
                                <h2>ИТМО X ПИШ</h2>
                            </div>
                            <div className="flex justify-center gap-5">
                                <Button type="primary" onClick={()=>navigate("/for_student")} className="z-10">Я студент</Button>
                                <Button type="primary" onClick={()=>navigate("/for_company")} className="z-10">Мы компания</Button>
                            </div>
                        </Col>
                    </Row>
                    <div className="my-5 flex flex-col md:grid md:grid-cols-2">
                        <div className="flex flex-col  justify-center items-center">
                            <h1 className="font-bold">Что это и для кого?</h1>
                        </div>

                        <div className="flex flex-col justify-center items-center font-light">
                            <h2>ЦИФРОВАЯ ПЛАТФОРМА - новый проект передовой инженерной школы Университета ИТМО, нацеленный на построение профессиональных связей между студентами
                                и крупными российскими компаниями</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        <h2>Для студентов</h2>
                    </p>
                    <div className="my-5 flex flex-col md:grid md:grid-cols-2">
                        <div className="flex flex-col  justify-center items-center">
                            <p>Реальные проекты от ведущих компаний</p>
                            <p>Примите участие в разработке нового продукта или решите производственную задачу совместно с партнерами платформы</p>
                        </div>
                        <div className="flex flex-col  justify-center items-center">
                            <p>Стажировки и трудоустройство</p>
                            <p>По результатам проделанной работы, получите возможность пройти учебную стажировку или стать новым сотрудником компании</p>
                        </div>
                        <div className="flex flex-col  justify-center items-center">
                            <p>Реализация своих разработок</p>
                            <p>Продвигайте собственные научные идеи, расскажите о своем стартапе
                                и привлекайте внимание и инвестиции с помощью биржи.</p>
                        </div>
                    </div>
                </div>


                {/*<Particles*/}
                {/*    id="tsparticles"*/}
                {/*    init={particlesInit}*/}
                {/*    loaded={particlesLoaded}*/}
                {/*    options={{*/}
                {/*        fpsLimit: 120,*/}
                {/*        interactivity: {*/}
                {/*            events: {*/}
                {/*                onClick: {*/}
                {/*                    enable: true,*/}
                {/*                    mode: "push",*/}
                {/*                },*/}
                {/*                onHover: {*/}
                {/*                    enable: true,*/}
                {/*                    mode: "repulse",*/}
                {/*                },*/}
                {/*                resize: true,*/}
                {/*            },*/}
                {/*            modes: {*/}
                {/*                push: {*/}
                {/*                    quantity: 4,*/}
                {/*                },*/}
                {/*                repulse: {*/}
                {/*                    distance: 200,*/}
                {/*                    duration: 0.4,*/}
                {/*                },*/}
                {/*            },*/}
                {/*        },*/}
                {/*        particles: {*/}
                {/*            color: {*/}
                {/*                value: "#ffffff",*/}
                {/*            },*/}
                {/*            links: {*/}
                {/*                color: "#ffffff",*/}
                {/*                distance: 150,*/}
                {/*                enable: true,*/}
                {/*                opacity: 0.5,*/}
                {/*                width: 1,*/}
                {/*            },*/}
                {/*            collisions: {*/}
                {/*                enable: true,*/}
                {/*            },*/}
                {/*            move: {*/}
                {/*                direction: "none",*/}
                {/*                enable: true,*/}
                {/*                outModes: {*/}
                {/*                    default: "bounce",*/}
                {/*                },*/}
                {/*                random: false,*/}
                {/*                speed: 2,*/}
                {/*                straight: false,*/}
                {/*            },*/}
                {/*            number: {*/}
                {/*                density: {*/}
                {/*                    enable: true,*/}
                {/*                    area: 800,*/}
                {/*                },*/}
                {/*                value: 80,*/}
                {/*            },*/}
                {/*            opacity: {*/}
                {/*                value: 0.1,*/}
                {/*            },*/}
                {/*            shape: {*/}
                {/*                type: "circle",*/}
                {/*            },*/}
                {/*            size: {*/}
                {/*                value: { min: 1, max: 5 },*/}
                {/*            },*/}
                {/*        },*/}
                {/*        detectRetina: true,*/}
                {/*    }}*/}
                {/*/>*/}
            </>




        </BasePage>
    );
};

export default MainPage;
