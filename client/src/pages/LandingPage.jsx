import React from 'react'
import { Banner } from '../components/banner/Banner'
import { CardBanner } from '../components/cardBanner/CardBanner'
import { Header } from '../components/Header/Header'
import "./style.css"
import { ButtonSeeMore } from '../components/button/ButtonSeeMore'
import { H1 } from '../components/h1/H1'
import { H2 } from '../components/h2/H2'
import { H3 } from '../components/h3/H3'
import { H4 } from '../components/h4/H4'
import { TextWithStyledWords } from '../components/textWithStyledWords/TextWithStyledWords'
import { Carousel } from '../components/Carousel/Carousel'
import { OpacityMask } from '../components/opacityMask/OpacityMask'
import { CardModelOne } from '../components/cardModelOne/CardModelOne'



export const LandingPage = () => {
    const paragraph_1= " En la Corporación Real Star le apostamos a que, a través del deporte, la recreación y la actividad física cada día más niños, niñas, dolescentes, jóvenes y adultos logren ser estrellas realmente exitosas, con capacidades para alcanzar y sostener su propósito de vida y desde su quehacer aporten significativamente al desarrollo social sostenible de Colombia."
    const paragraph_1_wordsToStyleOne = ["deporte","recreación", "actividad"]
    const paragraph_1_wordsToStyleTwo=["estrellas","realmente","exitosas"]
    const paragraph_2= "La Corporación Real Star aplica su método de intervención a todas las iniciativas que realiza, impulsando a través de estrategias deportivas, recreativas y de actividad física el desarrollo humano integral de las personas intervenidas."
    const paragraph_2_wordsToStyleOne = ["desarrollo","humano", "integral"]
    return (
    <>
        <Header/>

        <div>
            
        </div>

        <section className='landingpage-section-one landingpage-section'>
            <Banner invest={true}>
                <Carousel auto={true}> 
                    <CardBanner image="/src/assets/images/IMG_0433.jpg"/>
                    <CardBanner image="/src/assets/images/IMG_0433.jpg"/>
                    <CardBanner image="/src/assets/images/IMG_0433.jpg"/>
                </Carousel>
                <div>
                    <H1 value={"JUNTOS CONSTRUIMOS HISTORIAS DE VIDA EXITOSAS"}></H1>
                    <ButtonSeeMore value={"CONOCE MÁS"} color='#ff0019'/>
                </div>
            </Banner>
        </section>
        <section className='landingpage-section-two landingpage-section' >
            <div className='landingpage-section-two-container'>
                <Banner>
                    <CardBanner image="/src/assets/images/IMG_0433.jpg"/>
                    <div>
                        <TextWithStyledWords paragraph={paragraph_1} wordsToStyleOne={paragraph_1_wordsToStyleOne} wordsToStyleTwo={paragraph_1_wordsToStyleTwo}/>
                        <ButtonSeeMore value={"VER MAS"}/>
                    </div>
                </Banner>
                <Banner invest={true}>
                    <CardBanner image="/src/assets/images/IMG_0442.jpg"/>
                    <div>
                        <H4 value={"Nuestro método de intervención"}/>
                        <TextWithStyledWords paragraph={paragraph_2} wordsToStyleOne={paragraph_2_wordsToStyleOne}/>
                        <ButtonSeeMore value={"VER MAS"}/>
                    </div>
                </Banner>
            </div>
        </section>
        <section className='landingpage-section-three'>
            <OpacityMask>
                <H2 value={"MISIÓN Y VISIÓN"} color={"white"}></H2>
                <div className='landingpage-section-three-card-container'>
                    <CardModelOne 
                        title={"Misión"} 
                        paragraph={"Contribuir al desarrollo humano integral y generar bienestar a la población colombiana a través de la promoción del deporte, la recreación y la actividad física."}
                        image={"/src/assets/icons/Iconos-01.png"}
                        />
                    <CardModelOne
                        title={"Visión"}
                        paragraph={"Alcanzar el desarrollo social sostenible en Colombia a través del deporte, la recreación y la actividad física."}
                        image={"/src/assets/icons/Iconos-02.png"}
                        />
                </div>
            </OpacityMask>
        </section>
    </>
  )
}
