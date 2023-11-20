import React from "react";
import './styles.css'

function Header(){
    return(
        <>
            <footer className="footer-container">
                <div className="header-logo">
                    <img src="/src/assets/Logos/Logos Real Star-03.png" alt="image-logo" />

                </div>
                <div className="menu-options">
                   <div>
                        <ul className="options-container" >
                            <li>
                                <a>LA CORPORACION</a> 
                            </li>
                            <li>
                                <a>NUESTROS PROGRAMAS</a> 
                            </li>
                            <li>
                                <a>QUIÉNES SOMOS</a> 
                            </li>
                            <li>
                                <a>CONVOCATORIAS</a> 
                            </li>
                            <li>
                                <a>CONTÁCTANOS</a> 
                            </li>
                        </ul>
                   </div>


                </div>


            </footer>
        </>
    )
}

export {Header}