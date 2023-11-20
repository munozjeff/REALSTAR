import React from 'react'
import "./style.css"

export const ButtonSeeMore = ({color="#FF8300",value="VER MÁS"}) => {
  return <input style={{backgroundColor:color}} className='button-see-more' type="button" value={value}/>
}
