import React, { useEffect, useRef } from 'react'
import { H3 } from '../h3/H3'
import "./style.css"
import { ButtonSeeMore } from '../button/ButtonSeeMore'
import { H2 } from '../h2/H2'

export const CardPrograms = ({title, subtitle, titleType="h3", buttonValue="CONOCE MÁS"}) => {
    
  return (
    <div className='card-programs'>
        {titleType === "h3" && <div>
            <H3 value={title}/>
            <H3 value={subtitle} justify={true}/>
        </div>}
        {titleType === "h2" && <div>
            <H2 value={title}/>
        </div>}
        <ButtonSeeMore value={buttonValue}/>
    </div>
  )
}
