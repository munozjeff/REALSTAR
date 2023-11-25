import React from 'react'
import "./style.css"
import { H2 } from '../h2/H2'

export const SectionFullWidth = ({image,title,backgroundColor,titleColor}) => {
  return (
    <section className='section-full-width' style={{backgroundColor:backgroundColor}}>
            <H2 value={title} color={titleColor}></H2>
            <img src={image} className='section-full-width-image'/>
    </section>
  )
}
