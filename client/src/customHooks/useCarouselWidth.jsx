import React, { useEffect, useState } from 'react'

export const maxWidth = 0.95

const refInit = {
    carouselContainer:null
}

export const useCarouselWidth = ({widthInit,items,children,auto,infinite}) => {
    const [width, setWidth] = useState(null)
    const [itemWidthSingle,setItemWidthSingle] = useState(0)
    const [references,setReferencesCarouselWidth] = useState({...refInit})

    useEffect(() => {
        if (width) {
            references.carouselContainer.current.style.width = `${width}px`
        }

    }, [width])
    

    useEffect(()=>{
        if (references.carouselContainer) {
            let newWidth = 0
            const cantItems = infinite ?  (children + 6): items
            let itemWidth = references.carouselContainer.current.children[0].offsetWidth / children
            console.log(references.carouselContainer.current.children[0].scrollWidth);
            setItemWidthSingle(itemWidth) 
            itemWidth = 0
            if (items !== null) {
                switch (items) {
                    case 0:
                        newWidth = references.carouselContainer.current.clientWidth * (widthInit / 100)
                        setWidth(newWidth)
                        break;
                    case 1:
                        itemWidth = references.carouselContainer.current.scrollWidth / cantItems
                        newWidth = itemWidth
                        setWidth(newWidth)
                        break;
                
                    default:
                        itemWidth = references.carouselContainer.current.scrollWidth / cantItems
                        newWidth = itemWidth * items
                        newWidth = newWidth >= (window.innerWidth * maxWidth) 
                            ? ((Math.floor((window.innerWidth * maxWidth) / itemWidth) * itemWidth))
                            : newWidth
                        setWidth(newWidth)
                        break;
                }
            }
            else{
                itemWidth = references.carouselContainer.current.scrollWidth / cantItems
                newWidth = auto 
                    ? (Math.floor((window.innerWidth * maxWidth) / itemWidth) * itemWidth)
                    : references.carouselContainer.current.clientWidth * (widthInit / 100)
                    
                setWidth(newWidth)
            }
        }
    },[references.carouselContainer])

  return{
    setReferencesCarouselWidth,
    itemWidthSingle
  }
}
