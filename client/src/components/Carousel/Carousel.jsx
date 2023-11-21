import React, { useEffect, useRef, useState } from 'react'
import './Carousel.css'
import { useCarouselWidth } from '../../customHooks/useCarouselWidth'
import { useCarouselScroll } from '../../customHooks/useCarouselScroll'
// import { useCarousel } from '../../customHooks/useCarousel'

export const Carousel = ({children=[],width=100,items:cantItems=null,auto=false,time=5000,infinite=false}) => {
    const {setReferencesCarouselWidth} = useCarouselWidth({
        widthInit:width,
        items:cantItems,
        auto:auto,
        infinite:infinite,
        children:children.length
    })
    const {items,scroll,initScroll,endScroll,setReferencesCarouselScroll} = useCarouselScroll({
      items:children,
      auto:auto,
      time:time,
      infinite:infinite
    })
    const itemsContainer = useRef()
    const carouselContainer = useRef()

    useEffect(() => {
      if (carouselContainer.current) {
        setReferencesCarouselWidth({carouselContainer:carouselContainer})
        setReferencesCarouselScroll({carouselContainer:carouselContainer})
      }
    }, [carouselContainer])
    
    const onMouseDownHandler = (e) => initScroll(e.clientX)
    const onMouseMoveHandler = (e) => {
      e.preventDefault()
      scroll(e.clientX)
    }
    
    const onMouseUpHandler = () => endScroll()
    const onMouseOutHandler = () => endScroll()
    const onTouchStartHandler = (e) => initScroll(e.touches[0].clientX)
    const onTouchMoveHandler = (e) => scroll(e.touches[0].clientX)
    const onTouchEndHandler = () => endScroll()

  return (
    <div className='carousel'>
      <div className='button-carousel button-carousel-prev'></div>
      <div ref={carouselContainer} id='carouselContainer' 
        onMouseDown={onMouseDownHandler}
        onMouseMove={onMouseMoveHandler}
        onMouseUp={onMouseUpHandler}
        onMouseOut={onMouseOutHandler}
        onTouchStart={onTouchStartHandler}
        onTouchMove={onTouchMoveHandler}
        onTouchEnd={onTouchEndHandler}>
          <div ref={itemsContainer} id='itemsContainer'>
              {items && 
                  items.map((item,index)=><div className='itemContainer' key={index}>{item}</div>)}
          </div>
      </div>
      <div className='button-carousel button-carousel-next'></div>
    </div>
    
  )
}
