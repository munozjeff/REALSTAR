import React, { useEffect, useRef } from 'react'
import "./style.css"

export const H3 = ({value, justify=false}) => {
  const h3_ref = useRef(null)

  useEffect(() => {
    if (h3_ref && justify) {
      // console.log(h3_ref.current.clientWidth);
      if (h3_ref.current.parentNode.clientWidth > h3_ref.current.clientWidth) {
        console.log(h3_ref.current.parentNode.clientWidth);
        console.log(h3_ref.current.clientWidth);
        const AvailableSpace = h3_ref.current.parentNode.clientWidth - h3_ref.current.clientWidth
        const textContent = h3_ref.current.textContent.trim();
        const textLength = textContent.length;
        const letterSpacing = AvailableSpace / (textLength-1)
        h3_ref.current.style.letterSpacing=`${letterSpacing}px`
        h3_ref.current.style.paddingLeft = `${letterSpacing}px`
      }
      
    }
  }, [h3_ref])
  

  return (
    <h3 ref={h3_ref} className='h3-custom'>{value}</h3>
  )
}
