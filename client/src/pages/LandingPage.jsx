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
import { CardValues } from '../components/CardValues/CardValues'
import { CardPrograms } from '../components/cardPrograms/CardPrograms'
import { ImageandText } from '../components/ImageandText/ImageandText'
import { SectionFullWidth } from '../components/sectionfullWidth/SectionFullWidth'
import { Footer } from '../components/Footer/Footer'
import image_carousel_one from "/src/assets/images/1.jpg"
import image_carousel_two from "/src/assets/images/2.jpg"
import image_carousel_three from "/src/assets/images/3.Carrusel.jpg"
import image_banner_one from "/src/assets/images/IMG_0433.jpg"
import image_banner_two from "/src/assets/images/IMG_0442.jpg"
import image_banner_three from "/src/assets/images/IMG_0441.jpg"
import image_banner_four from "/src/assets/images/IMG_0528.jpg"
import image_banner_five from "/src/assets/images/IMG_0427.jpg"
import method_of_intervention from "/src/assets/images/Metodo_De_Intervencion.png"
import icon_01 from "/src/assets/icons/Iconos-01.png"
import icon_02 from "/src/assets/icons/Iconos-02.png"
import icon_03 from "/src/assets/icons/Asset-3.png"
import icon_04 from "/src/assets/icons/Asset-2.png"
import { Contact } from '../components/Contact/Contact'
import { CarouselBootstrap } from '../components/carouselBootstrap/CarouselBootstrap'

export const LandingPage = () => {
    const paragraph_1= " En la Corporación Real Star le apostamos a que, a través del deporte, la recreación y la actividad física cada día más niños, niñas, dolescentes, jóvenes y adultos logren ser estrellas realmente exitosas, con capacidades para alcanzar y sostener su propósito de vida y desde su quehacer aporten significativamente al desarrollo social sostenible de Colombia."
    const paragraph_1_wordsToStyleOne = ["deporte","recreación", "actividad"]
    const paragraph_1_wordsToStyleTwo=["estrellas","realmente","exitosas"]
    const paragraph_2= "La Corporación Real Star aplica su método de intervención a todas las iniciativas que realiza, impulsando a través de estrategias deportivas, recreativas y de actividad física el desarrollo humano integral de las personas intervenidas."
    const paragraph_2_wordsToStyleOne = ["desarrollo","humano", "integral"]
    return (
    <>
        <Header/>

        <div className='body-landingpage'>
            <section  id='section1' className='landingpage-section-one landingpage-section'>
                {/* <Banner invest={true}> */}
                    {/* <div className='landingpage-section-one-carousel-container'>
                        <CarouselBootstrap>
                            <CardBanner image={image_carousel_one} logo={true}/>
                            <CardBanner image={image_carousel_two} logo={true}/>
                            <CardBanner image={image_carousel_three} logo={true}/>
                        </CarouselBootstrap>
                        <Carousel auto={true} infinite={false} time={5000} enableButtons={true} items={1}> 
                            <CardBanner image={image_carousel_one}/>
                            <CardBanner image={image_carousel_two}/>
                            <CardBanner image={image_carousel_three}/>
                        </Carousel>
                    </div> */}
                    <div className='landingpage-section-one-title-container'>
                            <H1 value={"JUNTOS CONSTRUIMOS HISTORIAS DE VIDA EXITOSAS"}></H1>
                            <ButtonSeeMore value={"CONOCE MÁS"} color='#ff0019' hover={true}/>
                    </div>
                {/* </Banner> */}
            </section>
            <section id='section2' className='landingpage-section-two landingpage-section' >
                <div className='landingpage-section-two-container'>
                    <Banner>
                        <CardBanner image={image_banner_one}/>
                        <div>
                            <H4 value={"La Corporación"} />
                            <TextWithStyledWords paragraph={paragraph_1} wordsToStyleOne={paragraph_1_wordsToStyleOne} wordsToStyleTwo={paragraph_1_wordsToStyleTwo}/>
                            <ButtonSeeMore value={"VER MAS"}/>
                        </div>
                    </Banner>
                    <Banner invest={true}>
                        <div>
                            <CardBanner image={image_banner_two}/>
                            <div className='button-image'>
                                <ButtonSeeMore value={"VER MAS"} to='#nuestro-metodo'/>
                            </div>
                        </div>
                        
                        <div>
                            <H4 value={"Nuestro método de intervención"} />
                            <TextWithStyledWords paragraph={paragraph_2} wordsToStyleOne={paragraph_2_wordsToStyleOne}/>
                            <div className='button-paragraph'>
                                <ButtonSeeMore value={"VER MAS"} to='#nuestro-metodo'/>
                            </div>
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
                            image={icon_01}
                            />
                        <CardModelOne
                            title={"Visión"}
                            paragraph={"Alcanzar el desarrollo social sostenible en Colombia a través del deporte, la recreación y la actividad física."}
                            image={icon_02}
                            />
                    </div>
                </OpacityMask>
            </section>

            <section id='section-somos' className='landingpage-section section-WhoWeAre'>
                <div>
                <H2 value={"QUIÉNES SOMOS"} color={"#FF8300"}/>
                <TextWithStyledWords 
                    paragraph='Corporación Real Star, es una organización sin fines de lucro que 
                                propicia el desarrollo humano integral de las personas, genera 
                                bienestar a las familias y contribuye al desarrollo social de las 
                                comunidades, teniendo como base la promoción del deporte, la recreación 
                                y la actividad física.'

                />
                <Banner bannerModel={2} >
                    <CardBanner image={image_banner_four} logo={true}/>
                    <TextWithStyledWords 
                        paragraph='A partir del 2018 (Año en que se fundó la organización), 
                                    lideramos estrategias deportivas, recreativas y de 
                                    actividad física que posibilitan a nuestros grupos de 
                                    valor adquirir habilidades para afrontar los retos que 
                                    les impiden alcázar sus metas de vida, aplicar hábitos 
                                    de autocuidado y cuidado del medio ambiente y ser 
                                    personas capaces mantener relaciones interpersonales 
                                    asertivas, reconociendo sus derechos, deberes y 
                                    responsabilidades. Nuestros programas/proyectos son 
                                    rutas atractivas e innovadoras para lograr el desarrollo 
                                    social de las comunidades en las que hacemos 
                                    intervención.'
                    />
                </Banner>
                <Banner bannerModel={2} invest={true}>
                    <CardBanner image={image_banner_five} logo={true}/>
                    <div>
                        <H2 value={"Lo que más nos motiva"} color={"#ff0019"}/>
                        <TextWithStyledWords 
                            paragraph='Nos mueve la necesidad desarrollar acciones que 
                                        contrarresten problemáticas derivadas de las 
                                        inequidades sociales y las diferentes formas exclusión 
                                        social, dando la posibilidad a los grupos de 
                                        intervención a que, a partir de la apropiación de 
                                        habilidades y herramientas facilitadas en el marco de 
                                        la promoción del deporte, la recreación y la actividad 
                                        física logren orientar sus acciones de forma acertada 
                                        con miras a mejorar su calidad de vida'
                        />
                    </div>
                </Banner>
                </div>
            </section>

            <section id='nuestros-programas' className='our-programs'>
                <div>
                    <H2 value={"NUESTROS PROGRAMAS"} color={"#FF8300"}></H2>
                    <div className='our-programs-cards-container'>
                        <CardPrograms title={"SEMILLEROS"} subtitle={"DEPORTIVOS"}/>
                        <CardPrograms title={"FORMANDO"} subtitle={"FORMADORES"}/>
                        <CardPrograms title={"INTEGRACIÓN"} subtitle={"SOCIAL"}/>
                    </div>
                </div>
            </section>
                        
            <section id='convocatoria' className='landingpage-section-three section-Join'>
                <OpacityMask>
                    <H2 value={"SÚMATE"} color={"white"}></H2>
                    <div className='section-Join-paragraph-container'>
                        <p>
                            Sumamos esfuerzos para que cada día sean mas las historias 
                            de vida exitosas en Colombia, ahora es el momento
                        </p>
                        <p>
                            ¡Tus aportes suman!
                        </p>
                    </div>
                    <ButtonSeeMore value='DONAR' color='#FF8300' to='https://wa.me/573245428745'/>
                    <ButtonSeeMore value='ALIARSE' color='#FF8300' to='https://wa.me/573245428745'/>
                </OpacityMask>
            </section>
 
            {/* <section className='our-method-of-intervention-section section-full-width' >
                <H2 value={"NUESTRO MÉTODO DE INTERVENCIÓN"} color={"white"}></H2>
                <div className='our-method-of-intervention-section-background-image'>

                </div>
            </section> */}
            <section id='nuestro-metodo'>
                <SectionFullWidth 
                    image={method_of_intervention} 
                    title={"NUESTRO MÉTODO DE INTERVENCIÓN"}
                    titleColor={"#FF8300"}
                    backgroundColor={"#EAEBED"}/>
            </section>

            <section className='problem-and-solution'>
                <div>
                <ImageandText
                        imageRoute={icon_03}
                        title="El problema"
                        paragraph="El Informe Nacional sobre Desarrollo Humano para Colombia ha señalado “En Colombia, en relación con las dimensiones del Índice de Desarrollo Humano, hubo un alto impacto en salud por el exceso de mortalidad, un freno al avance en los indicadores de educación y una caída en la dimensión del ingreso, con un deterioro relevante en la brecha de ingreso entre hombres y mujeres. Adicionalmente, frente al desarrollo humano persisten las pérdidas a causa, principalmente, de la desigualdad y por presiones planetarias”. Estudio realizado para     Colombia por PNUD y el Reino de Suecia, Año 2022."
                    />
                <ImageandText
                        imageRoute={icon_04}
                        title="La solución"
                        paragraph="La CORPORACIÓN REAL STAR, desde su filantropía alinea su actuar con el firme propósito de potenciar las capacidades de sus grupos de valor, que les permita facilitarse más oportunidades para gestionar y lograr sus metas de vida y mejorar su calidad de vida. Los programas y proyectos a través de los cuales busca lograr su propósito superior centran sus bases en la promoción del deporte, la recreación y la actividad física, como punto de partida para dotar a la población intervenida de habilidades y/o cualidades para su desarrollo humano
                        integral."


                    />

                    <p className='problem-and-solution-p'  >
                    Para orientar y acompañar el desarrollo humano integral de los grupos de valor objetivo de intervención y lograr su propósito misional (Construir al desarrollo humano integral de las personas y generar bienestar a las familias colombianas a través de la promoción del deporte, la recreación y la
                    actividad física), aplica (2) dos ejes estratégicos y (6) seis componentes que apropiados por las personas atendidas facilitan las capacidades necesarias para transformar su realidad y contribuir al desarrollo local de
                    su territorio.
                    </p>
                </div>
            
            </section>
            <SectionFullWidth 
                    image={method_of_intervention} 
                    title={"ORGANIGRAMA"}
                    titleColor={"#FF8300"}
                    backgroundColor={"white"}
                    />

            <SectionFullWidth 
                            image={method_of_intervention} 
                            title={"NUESTRA GESTIÓN"}
                            titleColor={"#FF8300"}
                            backgroundColor={"#EAEBED"}/>

            {/* <section className='our-programs'>
                <div>
                    <H2 value={"DOCUMENTOS"} color={"#FF8300"}></H2>
                    <div className='our-programs-cards-container'>
                        <CardPrograms title={"REGIMEN TRIBUTARIO"} titleType='h2' buttonValue='VER'/>
                        <CardPrograms title={"POLÍTICA DE TRATAMIENTO"} titleType='h2' buttonValue='VER'/>
                    </div>
                </div>
            </section> */}
        </div>

        <Contact/>
        <Footer/>
    </>


    
  )
}
