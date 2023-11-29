import React from 'react'
import "./style.css"


export const CardBanner = ({image, logo=false}) => {
  return (
    <div className='card-banner'>
        <img src={image} alt="" className='card-banner-img'/>
        {logo && <div className="card-banner-logo" />}
    </div>
  )
}
