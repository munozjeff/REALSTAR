import React, { Children } from 'react'
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { CardBanner } from '../cardBanner/CardBanner';
import image_carousel_one from "/src/assets/images/1.Carrusel.jpg"

export const CarouselBootstrap = ({children}) => {
    return (
        <Carousel touch={true}>
            {children.map((card,index)=><Carousel.Item key={index}>{card}</Carousel.Item>)}
        </Carousel>
      );
}
