import React from 'react'
import { Banner } from '../components/banner/Banner'
import { CardBanner } from '../components/cardBanner/CardBanner'
import { Header } from '../components/Header/Header'
import "./style.css"



export const LandingPage = () => {
    const paragraph_1= "En la Corporación Real Star le apostamos a que, a través del deporte, la recreación y la actividad física cada día más niños, niñas, dolescentes, jóvenes y adultos logren ser estrellas realmente exitosas, con capacidades para alcanzar y sostener su propósito de vida y desde su quehacer aporten significativamente al desarrollo social sostenible de Colombia."
    const paragraph_1_wordsToStyleOne = ["deporte","recreación", "actividad"]
    const paragraph_1_wordsToStyleTwo=["estrellas","realmente","exitosas"]
    const paragraph_2= "La Corporación Real Star aplica su método de intervención a todas las iniciativas que realiza, impulsando a través de estrategias deportivas, recreativas y de actividad física el desarrollo humano integral de las personas intervenidas."
    const paragraph_2_wordsToStyleOne = ["desarrollo","humano", "integral"]
    return (
    <>
        <Header/>
        <section className='landingpage-section-one'>
            <div className='landingpage-section-one-container'>
                <Banner paragraph={paragraph_1} wordsToStyleOne={paragraph_1_wordsToStyleOne} wordsToStyleTwo={paragraph_1_wordsToStyleTwo}>
                    <CardBanner image="/src/assets/images/IMG_0433.jpg"/>
                </Banner>
                <Banner paragraph={paragraph_2} invest={true} wordsToStyleOne={paragraph_2_wordsToStyleOne} title={"Nuestro método de intervención"}>
                    <CardBanner image="/src/assets/images/IMG_0442.jpg"/>
                </Banner>
            </div>
        </section>
        
    </>
  )
}
