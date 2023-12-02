import React from 'react'
import "./style.css"

export const ButtonSeeMore = ({color="#FF8300",value="VER MÁS", hover=true, to=""}) => {
  return <a href={to}><input style={{backgroundColor:color}} className={`button-see-more ${hover && 'grow'}`} type="button" value={value}/></a>
}
