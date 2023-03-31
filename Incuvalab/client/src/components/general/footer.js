import React from "react";
import '../../css/footer.css'
import * as AiIcons from 'react-icons/ai';

export default function Footer(props) {

    return (
        <div className="footer">
            <div className="container ">
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col">
                                <h4>Nuestra sección</h4>
                                <ul>
                                    <li><a href="#">Sobre nosotros</a></li>
                                    <li><a href="#">Nuestros servicios</a></li>
                                    <li><a href="#">Politica de privacidad</a></li>
                                    <li><a href="#">Programasa afilidados</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Te ayudamos</h4>
                                <ul>
                                    <li><a href="#">Preguntas y respuestas</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Visita tambien</h4>
                                <ul>
                                    <li><a href="#">Univalle Oficial</a></li>
                                    <li><a href="#">¿Eres un estudiante nuevo?</a></li>
                                    <li><a href="#">Mas sobre Univalle</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Siguenos en nuestras redes</h4>
                                <div className="social-links">
                                    <a href="#"><i><AiIcons.AiOutlineTwitter className="m-3"/></i></a>
                                    <a href="#"><i><AiIcons.AiFillFacebook className="m-3"/></i></a>
                                    <a href="#"><i><AiIcons.AiFillLinkedin className="m-3"/></i></a>
                                    <a href="#"><i><AiIcons.AiFillInstagram className="m-3"/></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
}
