import React from 'react'
import "./style.css"

export const OpacityMask = ({children}) => {
  return (
    <div className='opacity-mask-container'>
        {children}
    </div>
  )
}
