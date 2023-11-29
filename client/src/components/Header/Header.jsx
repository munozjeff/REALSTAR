import React from "react";
import './styles.css'
import {FaBars, FaTimes} from "react-icons/fa"
import {useRef} from "react"
import logo from "/src/assets/Logos/Logos Real Star-03.png"
function Header(){

    const navRef = useRef();
    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav");
    }


    return(
        <>
            <header className="header-container"> 
                <div className="header-logo">
                    <img src={logo} alt="image-logo" />
                
                </div>
                <nav ref={navRef}>

                        <a href="#section1">LA CORPORACIÓN</a> 

                        <a href="#nuestros-programas">NUESTROS PROGRAMAS</a> 

                        <a href="#section-somos">QUIÉNES SOMOS</a> 

                        <a href="#convocatoria">CONVOCATORIAS</a> 

                        <a>CONTÁCTANOS</a>

                        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            <FaTimes/>
                        </button>
                </nav>

                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>



            </header>
        </>
    )
}

export {Header}