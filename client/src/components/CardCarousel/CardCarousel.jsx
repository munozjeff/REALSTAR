import React from 'react'

export const CardCarousel = ({id,image='/src/assets/promo.png'}) => {
  return (
    <div style={{width:'95vw',height:'auto',display:'flex',justifyContent:'center',userSelect: "none",pointerEvents: "none"}}><img src={image} style={{margin:'0',padding:'0',objectFit:'cover',width:'100%'}}/></div>
  )
}
