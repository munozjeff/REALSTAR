import React, { useEffect, useRef } from 'react'
import { H3 } from '../h3/H3'
import "./style.css"
import { ButtonSeeMore } from '../button/ButtonSeeMore'

export const CardPrograms = ({title, subtitle}) => {
    
  return (
    <div className='card-programs'>
        <div>
            <H3 value={title}/>
            <H3 value={subtitle} justify={true}/>
        </div>
        <ButtonSeeMore value='CONOCE MÁS'/>
    </div>
  )
}
