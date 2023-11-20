import React from 'react'
import { Banner } from '../components/banner/Banner'
import { CardBanner } from '../components/cardBanner/CardBanner'
import { Header } from '../components/Header/Header'



export const LandingPage = () => {
    const paragraph_1= "En la Corporación Real Star le apostamos a que, a través del deporte, la recreación y la actividad física cada día más niños, niñas, dolescentes, jóvenes y adultos logren ser estrellas realmente exitosas, con capacidades para alcanzar y sostener su propósito de vida y desde su quehacer aporten significativamente al desarrollo social sostenible de Colombia."
    const paragraph_1_wordsToStyleOne = ["deporte","recreación", "actividad"]
    const paragraph_1_wordsToStyleTwo=["estrellas","realmente","exitosas"]
    return (
    <>
        <Header/>
        <Banner paragraph={paragraph_1} imageSize={0.51} wordsToStyleOne={paragraph_1_wordsToStyleOne} wordsToStyleTwo={paragraph_1_wordsToStyleTwo}>
            <CardBanner image="/src/assets/IMG_0433.jpg"/>
        </Banner>
        <Banner paragraph={paragraph_1} invest={true} imageSize={0.51} bannerModel={2}>
            <CardBanner image="/src/assets/IMG_0433.jpg"/>
        </Banner>
    </>
  )
}
