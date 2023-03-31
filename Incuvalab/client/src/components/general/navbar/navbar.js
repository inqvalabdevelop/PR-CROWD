import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../../images/logo.png'
import avatar from '../../../images/profile.webp'
import ButonLogout from '../logout';
import '../../../css/navbar.css'
import { SidebarData } from "./sidebarData";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import ButtonLogoutAdmin from "../logoutAdmins";

export default function NavbarHead(props) {
    const dataUser = JSON.parse(sessionStorage.getItem('user'));
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
  
    
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    {sessionStorage.getItem('role') != 'Administrador' ?
                        <Navbar.Brand href="" className="nav-page-title">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            IncUVa Lab
                        </Navbar.Brand> :
                        <></>}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav navbarScroll className="container">
                            {sessionStorage.getItem('role') != null && sessionStorage.getItem('role') == 'Administrador' ?
                                <div className="container d-flex navElement text-center">
                                    <Nav.Link href="/controlPage" className="ms-5">Dashboard</Nav.Link>
                                    <Navbar.Brand href="" className="nav-page-title">
                                        <img
                                            alt=""
                                            src={logo}
                                            width="30"
                                            height="30"
                                            className="d-inline-block align-top"
                                        />{' '}
                                        IncUVa Lab
                                    </Navbar.Brand>
                                    <Nav.Link href="/createFunding">Crear campaña</Nav.Link>
                                </div>
                                :
                                <>
                                    <Nav.Link href="/">Inicio</Nav.Link>
                                    <Nav.Link href="/catalogue">Catalogo de proyectos</Nav.Link>
                                    <Nav.Link href="/questions">Preguntas frecuentes</Nav.Link>
                                </>}
                            
                        </Nav>

                        <div className="navbar">
                                <div> {sessionStorage.getItem('user') != null ?
                                    <div>
                                        {sessionStorage.getItem('role') != null && sessionStorage.getItem('role') != 'Administrador' ?
                                            <div className="dropdown">
                                                <div className="d-flex" data-toggle="dropdown" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                                                    <img src={avatar} class="profile-image img-circle" height="40" width="40" />
                                                    <b className="caret mt-2 ms-2"> {dataUser[0].UserName}</b>
                                                </div>
                                                <div className="dropdown-menu dropdown-left" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="/userProfile">Mis registros</a>
                                                    <a className="dropdown-item" href="/settings">Mi Perfil</a>
                                                    <ButonLogout />
                                                </div>

                                            </div>
                                            : <div></div>
                                        }
                                    </div>
                                    :
                                    <div className="d-flex">
                                        <form action="/login" className=" me-2">
                                            <button className="button btn-outline-login" type="sumit">Iniciar Sesión</button>
                                        </form>
                                        <form action="/register" className="">
                                            <button className="button btn-register" type="sumit">Regístrate</button>
                                        </form>
                                    </div>
                                }
                                </div>
                            </div>
                        {sessionStorage.getItem('role') != null && sessionStorage.getItem('role') == 'Administrador' ?
                            <div>
                                <IconContext.Provider value={{ color: '#b70150' }}>
                                    <Link to='#' className='menu-bars mx.auto'>
                                        <FaIcons.FaBars onClick={showSidebar} />
                                    </Link>
                                </IconContext.Provider>
                            </div> :
                            <div>
                            </div>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {sessionStorage.getItem('role') != null && sessionStorage.getItem('role') == 'Administrador' ?
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                    <ul className='nav-menu-items py-4' onClick={showSidebar}>

                        <h1 className={`my-1 text-white origin-left font-medium fs-3 pb-4`}>
                            Bienvenido!
                        </h1>
                        <div className="dropdown user-profile my-2">
                            <div className="flex my-2 mx-2" data-toggle="dropdown" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                                <img src={avatar} clasNames="profile-image img-circle mx-2" height="40" width="40" alt="Foto de perfil" />
                                <b className="caret"> {dataUser[0].UserName}</b>
                            </div>
                            {/*<div className="dropdown-menu dropdown-left" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/userProfile">Mis registros</a>
                                <a className="dropdown-item" href="/settings">Mi Perfil</a>
                                <ButonLogout />
                            </div>*/}
                        </div>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        <ButtonLogoutAdmin/>
                    </ul>
                </nav> : <div></div>}
        </div>
    );
}