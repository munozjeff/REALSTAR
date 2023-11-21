import React from 'react'
import "./style.css"
import { H3 } from '../h3/H3'

export const CardModelOne = ({title, paragraph, image}) => {
  return (
    <div className='card-model-one'>
        <img src={image} alt="" />
        <H3 value={title}/>
        <p>{paragraph}</p>
    </div>
  )
}
