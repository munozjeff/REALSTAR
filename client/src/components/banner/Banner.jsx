import React from 'react'
import "./style.css"
import { TextWithStyledWords } from '../textWithStyledWords/TextWithStyledWords'

export const Banner = (
  {children, 
    paragraph, 
    seeMore=true, 
    invest=false, 
    bannerModel=1, 
    wordsToStyleOne=[], 
    wordsToStyleTwo=[],
    title=null
  }
    ) => {
  return (
    <>
    <article className='banner-article'>
        <div className={`banner-section ${invest && "invest"} ${bannerModel === 1 ? "banner-image-model-one":"banner-image-model-two"}`}>{children}</div>
        <div className={`banner-section banner-info ${invest && "invest"} ${bannerModel === 1 ? "banner-info-model-one":"banner-info-model-two"}`}>
          {title && <h2 className='banner-title'>{title}</h2>}
          <TextWithStyledWords paragraph={paragraph} wordsToStyleOne={wordsToStyleOne} wordsToStyleTwo={wordsToStyleTwo}/>
          <input className='banner-info-input grow' type="button" value="VER MÁS"/>
        </div>
    </article>
    </>
  )
}
