import React from 'react'
import "./style.css"

export const H2 = ({value,color}) => {
  return (
    <h2 className='h2-custom' style={{color:color}}>{value}</h2>
  )
}
