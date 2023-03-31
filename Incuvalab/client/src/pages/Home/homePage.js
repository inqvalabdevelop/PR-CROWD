import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap'

import NavbarHead from '../../components/general/navbar/navbar';
import Footer from '../../components/general/footer';
import image1 from '../../images/homepage.jpg'
import image2 from '../../images/homepage1.jpg';
import image3 from '../../images/homepage2.jpg';
import image4 from '../../images/finances.svg';
import image5 from '../../images/manchas.png';

import '../../css/home.css'
import { FundCards } from '../../components/funding/fundCardTop';
import { FundingProvider } from '../../context/fundingContext';

export function HomePage() {
    return (
        <React.Fragment>
            <section>
                <div>
                    <div className="container-fluid flex position-relative overflow-hidden p-3 p-md-5 mb-5" id='banner'>
                        <Row></Row>
                        <Row className='mx-5'>
                            <Col sm={8} className="my-5">
                                <h1 className="display-5 fw-bold  text-start align-middle" id='titleHome'>Los proyectos emprendedores abren un mundo de posibilidades. Ayuda a financiarlo aquí.</h1>
                                <br ></br>
                                <p className=" fs-3 text-white text-start">Deja que el mundo vea y apoye tu trabajo de tus ideas desde cualquier parte.</p>
                                <a className='btn btn-lg mt-5' href='/CreateProject' type="button" id='btn-startproyect'>Iniciar Campaña</a>
                            </Col>
                            <Col sm={4}>
                                <Row>
                                    <Col>
                                        <img className='img-fluid' src={image1} />
                                    </Col>
                                    <Col>
                                        <img className='img-fluid' src={image3} />
                                    </Col>
                                </Row>
                                <Row >
                                    <Col>
                                        <img className='img-fluid mt-3' src={image2} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row></Row>
                    </div>

                    <div className='container-sm'>
                        <Row>
                            <Col sm={2}>
                                <p className='fs-5 fw-bold text-secondary'> ¿Qué nos espera?</p>
                            </Col>
                            <Col className='my-auto'>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className='display-6 fw-bold  text-wrap  mb-2' id="text-wrap-left">Recaudar fondos en Incuva Lab solo lleva unos minutos</p>
                            </Col>
                            <Col>
                                <img className='img-fluid mt-3 ' src={image5} />
                            </Col>
                        </Row>
                        <Row className='p-5'>
                            <Col className='m-2'>
                                <div id="circulo">
                                    <p> 1 </p>
                                </div>
                                <div className='my-3 mx-3 text-center'>
                                    <p className='fs-3 fw-bold text-secondary'>Empieza con lo más básico</p>
                                    <p>Comienza por dar tu nombre y ubicación.</p>
                                </div>
                            </Col>
                            <Col className='m-2'>
                                <div id="circulo">
                                    <p> 2 </p>
                                </div>
                                <div className='my-3 mx-3 text-center'>
                                    <p className='fs-3 fw-bold text-secondary'>Empieza con lo más básico</p>
                                    <p>Comienza por dar tu nombre y ubicación.</p>
                                </div>
                            </Col>
                            <Col className='m-2'>
                                <div id="circulo">
                                    <p> 3 </p>
                                </div>
                                <div className='my-3 mx-3 text-center'>
                                    <p className='fs-3 fw-bold text-secondary'>Empieza con lo más básico</p>
                                    <p>Comienza por dar tu nombre y ubicación.</p>
                                </div>
                            </Col>

                            <Col className='m-2'>
                                <div id="circulo">
                                    <p> 4 </p>
                                </div>
                                <div className='my-3 mx-3 text-center'>
                                    <p className='fs-3 fw-bold text-secondary'>Empieza con lo más básico</p>
                                    <p>Comienza por dar tu nombre y ubicación.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className='container-sm my-5'>
                        <div className='text-center'>
                            <p className='display-5 fw-bold'>¿Qué es IncUVa-Lab?</p>
                            <p className='fs-5 fw-semibold px-5 lh-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet aliquet ipsum. Vestibulum sagittis at elit in feugiat. Curabitur at ipsum et sapien tempus cursus. Nunc ac ante sapien. Proin eget est tellus. In hac habitasse platea dictumst. Suspendisse potenti. Sed tempor et ex vitae ultrices.</p>
                        </div>
                    </div>

                    <hr />

                    <div className='container-sm my-5'>
                        <div>
                            <p className='display-6 fw-bold'>Proyectos destacados</p>
                        </div>

                        <FundCards />
                    </div>

                    <hr />

                    <div className='container-sm my-5'>
                        <div className='card shadow-lg p-3 mb-5 bg-body rounded rounded mx-8'>
                            <Row className='px-5'>
                                <Col className='mt-5 ms-5'>
                                    <p className="display-6 fw-bolder text-start text-secondary">¿Listo para empezar? Únete hoy mismo a miles de personas.</p>
                                    <Row>
                                        <Col sm={5}>
                                            <a className='btn btn-lg mt-3' type="button" href='/CreateProject' id='btn-startproyect'>Iniciar Campaña</a>
                                        </Col>
                                        <Col sm={5}>
                                            <a className='btn btn-lg mt-3' type="button" id='btn-outline-pageHome' href='/questions'>Como funciona</a>
                                        </Col>
                                        <Col sm={8}>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <img className='img-fluid mt-3' src={image4} />
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <Footer />
                </div>
            </section>
        </React.Fragment>
    )
}