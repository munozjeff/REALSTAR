import React from "react";
import './styles.css'

function Header(){
    return(
        <>
            <header className="header-container"> 
                <div className="header-logo">
                    <img src="/src/assets/Logos/Logos Real Star-03.png" alt="image-logo" />

                </div>
                <div className="menu-options">
                   <div>
                        <ul className="options-container" >
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


                </div>


            </header>
        </>
    )
}

export {Header}