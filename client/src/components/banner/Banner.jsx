import React from 'react'
import "./style.css"

export const Banner = (
  {
    children, 
    invest=false, 
    bannerModel=1, 
  }
    ) => {
  return (
    <>
    <article className='banner-article'>
        <div className={`banner-section ${invest && "invest"} ${bannerModel === 1 ? "banner-image-model-one":"banner-image-model-two"}`}>{children[0]}</div>
        <div className={`banner-section banner-info ${invest && "invest"} ${bannerModel === 1 ? "banner-info-model-one":"banner-info-model-two"}`}>
          {children[1]}
        </div>
    </article>
    </>
  )
}
