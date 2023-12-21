import React from "react";
import './styles.css'
import logo_white from "/src/assets/Logos/White Logo.png"
// import logo_02 from "/src/assets/Logos/Asset 4.png"
import logo_08 from "/src/assets/Logos/Asset 8.png"
import logo_07 from "/src/assets/Logos/Asset 7.png"
import logo_09 from "/src/assets/Logos/Asset 9.png"
import logo_10 from "/src/assets/Logos/Asset 10.png"
import logo_11 from "/src/assets/Logos/Asset 11.png"
import logo_12 from "/src/assets/Logos/linkedin.png"

function Footer(){
    return(
        <footer>
                <div className="footer-img">
                    <img src={logo_white} alt="footer-logo" />

                </div>

                <div className="footer-options-container">
                        <ul className="footer-options" >
                            <li>
                                <a href="#section2">LA CORPORACIÓN</a> 
                            </li>
                            <li>
                                <a href="#section-somos">QUIÉNES SOMOS</a> 
                            </li>
                            <li>
                                <a href="#nuestros-programas">NUESTROS PROGRAMAS</a> 
                            </li>
                            
                            <li>
                                <a href="#convocatoria">CONVOCATORIAS</a> 
                            </li>
                            <li>
                                <a href="#contact-form" >CONTÁCTANOS</a> 
                            </li>
                            <li>
                                <a href="#section-somos">REGIMEN TRIBUTARIO ESPECIAL</a> 
                            </li>
                            <li>
                                <a href="#section-somos">POLITICA DE TRATAMIENTO</a> 
                            </li>
                        </ul>
                </div>
            
                <div className="footer-contact-info">
                    <div className="column-3">
                        <p>Contacto</p>
                        <div className="logos-container-footer">

                            <div>
                                    <img src={logo_08}/>
                                    <a href="mailto:comunicaciones@corporacionrealstar.org">comunicaciones@corporacionrealstar.org</a>
                            </div>
                            <div>
                                    <img src={logo_07}/>
                                    <a href="tel:+573245428745">(+57) 324 5428745</a>
                            </div>

                        </div>

                        <div className="social-media-footer">
                            <a href="https://wa.me/573245428745" target="_blank" rel="noopener noreferrer">
                                 <img  src={logo_09}/>
                            </a>

                            <a href="https://www.instagram.com/corporacionrealstar" target="_blank" rel="noopener noreferrer">
                                <img src={logo_10}/>
                            </a>
                            <a href="https://www.facebook.com/CorporacionRealStarOficial" target="_blank" rel="noopener noreferrer">
                                <img src={logo_11}/>
                            </a>
                            <a href="https://www.linkedin.com/company/corporacion-real-star" target="_blank" rel="noopener noreferrer">
                                <img src={logo_12}/>
                            </a>
                            
                        </div>

                    </div>


                </div>


        </footer>
    )
}

export {Footer}