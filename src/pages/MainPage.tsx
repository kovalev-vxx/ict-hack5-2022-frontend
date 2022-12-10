import React, {useCallback} from 'react';
import BasePage from "./BasePage";
import {Button, Col, Row, Space} from "antd";
import Particles from "react-tsparticles";
import {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";

const MainPage = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);


    return (
        <BasePage>
            <div className="relative">
                <Row justify="space-around" align="middle">
                    {/*style={{display:"flex", textAlign:"center", flexDirection:"column", justifyContent:"space-between"}}*/}
                    <Col className="flex-col text-center justify-center" >
                        <div style={{maxWidth:"576px"}}>
                            <h1 className="mainTitle">ЦИФРОВАЯ ПЛАТФОРМА</h1>
                            <h2>ИТМО X ПИШ</h2>
                        </div>
                        <div className="flex justify-center gap-5">
                            <Button type="primary">Я студент</Button>
                            <Button type="primary">Мы компания</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>

                    </Col>
                    <Col span={12}>
                        
                    </Col>
                </Row>







                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.1,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>



        </BasePage>
    );
};

export default MainPage;
