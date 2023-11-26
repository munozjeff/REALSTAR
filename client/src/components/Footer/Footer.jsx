import React from "react";
import './styles.css'

function Footer(){
    return(
        <footer>
                <div className="footer-img">
                    <img src="/src/assets/Logos/Asset 4.png" alt="footer-logo" />

                </div>

                <div className="footer-options-container">
                        <ul className="footer-options" >
                            <li>
                                <a href="#section1">LA CORPORACIÓN</a> 
                            </li>
                            <li>
                                <a href="#nuestros-programas">NUESTROS PROGRAMAS</a> 
                            </li>
                            <li>
                                <a href="#section-somos">QUIÉNES SOMOS</a> 
                            </li>
                            <li>
                                <a href="#convocatoria">CONVOCATORIAS</a> 
                            </li>
                            <li>
                                <a>CONTÁCTANOS</a> 
                            </li>
                        </ul>
                </div>
            
                <div className="footer-contact-info">
                    <div className="column-3">
                        <p>Contacto</p>
                        <div className="logos-container-footer">

                            <div>
                                    <img src="/src/assets/Logos/Asset 8.png"/>
                                    <p></p>
                            </div>
                            <div>
                                    <img src="/src/assets/Logos/Asset 7.png"/>
                                    <p></p>
                            </div>

                        </div>

                        <div className="social-media-footer">
                            <img src="/src/assets/Logos/Asset 9.png"/>
                            <img src="/src/assets/Logos/Asset 10.png"/>
                            <img src="/src/assets/Logos/Asset 11.png"/>
                        </div>

                    </div>


                </div>


        </footer>
    )
}

export {Footer}