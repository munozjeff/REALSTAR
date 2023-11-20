import React from 'react'
import "./style.css"

export const CardBanner = ({image}) => {
  return (
    <div className='card-banner'>
        <img src={image} alt="" />
    </div>
  )
}
