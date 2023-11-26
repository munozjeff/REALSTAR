import React from 'react'
import "./style.css"

export const CardBanner = ({image, logo=false}) => {
  return (
    <div className='card-banner'>
        <img src={image} alt="" className='card-banner-img'/>
        {logo && <img src={"/src/assets/Logos/Logos_Real_Star-01.png"} className="card-banner-logo" />}
    </div>
  )
}
