import React, { useCallback, useEffect, useState } from 'react'

const initScrollState = {
    active:null,
    clientXInit:null,
    scrollLeftInit:null,
    scrollLeft:null,
    infinite:null,
    auto:null
}

export const useCarouselScroll = ({items:children,...data}) => {
    const [scrollState, setScrollState] = useState({...initScrollState,...data})
    const [references, setReferencesCarouselScroll] = useState({carouselContainer:null})
    const [items,setItems] = useState(children)

    useEffect(() => {
        if (scrollState.scrollLeft !=null && references.carouselContainer) {
            if(scrollState.active){
                references.carouselContainer.current.scrollLeft = scrollState.scrollLeft
            }
            else if(!scrollState.active){
                scrollTo()
            }
            if (data.infinite) {
                var endScrollHandler = () => {
                    if (scrollState.scrollLeft === references.carouselContainer.current.scrollLeft) {
                        const itemWidth = references.carouselContainer.current.scrollWidth / items.length
                        if (scrollState.scrollLeft-1 <= itemWidth) {
                            const newScrollLeft = references.carouselContainer.current.scrollLeft + (children.length * itemWidth)
                            references.carouselContainer.current.scrollLeft = newScrollLeft
                            setScrollState({...scrollState,scrollLeft:newScrollLeft})
                        }
                        else if(scrollState.scrollLeft+1 >= (Math.floor((references.carouselContainer.current.scrollWidth - (references.carouselContainer.current.clientWidth + itemWidth))/itemWidth)*itemWidth)){
                            const newScrollLeft = (references.carouselContainer.current.scrollLeft - ((children.length * itemWidth))) + 1
                            references.carouselContainer.current.scrollLeft = newScrollLeft 
                            console.log(references.carouselContainer.current.scrollLeft);
                            setScrollState({...scrollState,scrollLeft:newScrollLeft})
                        }
                        
                        references.carouselContainer.current.removeEventListener('scroll', endScrollHandler);
                    }
                    
                }
                references.carouselContainer.current.addEventListener('scroll', endScrollHandler);
            }
            
        }
        return ()=> endScrollHandler && references.carouselContainer.current.removeEventListener('scroll', endScrollHandler);
    }, [scrollState.scrollLeft])

    useEffect(()=>{
        if(references.carouselContainer && data.auto){

            if (!scrollState.active) {
                const itemWidth = references.carouselContainer.current.scrollWidth / items.length
                const newItems = references.carouselContainer.current.scrollLeft / itemWidth
                const completedItems = Math.floor(newItems)
                const rest = newItems - completedItems
                let scrollLeft = 0
                if (rest >= 0.5) {
                    scrollLeft = (completedItems * itemWidth ) + itemWidth
                }
                else{
                    scrollLeft = completedItems * itemWidth
                }
                setScrollState({...scrollState,scrollLeft:scrollLeft})
                console.log("upp");
            }
        }
    },[scrollState.active])

    useEffect(()=>{
        if(data.infinite && references.carouselContainer){
            const itemWidth = references.carouselContainer.current.scrollWidth / items.length
            setScrollState({...scrollState,scrollLeft:scrollState.scrollLeft + itemWidth*3})
            references.carouselContainer.current.scrollLeft = itemWidth*3
        }
    },[items])

    useEffect(()=>{        
        if(scrollState.infinite) {
            const newCantItems = children.length > 3 ? 3 : 1
            let itemsReverse = [...children]
            itemsReverse  = itemsReverse.reverse()
            let items = [...children]
            if (newCantItems === 1) {
                for (let index = 0; index < 6; index++) {
                    if (index <= 2) {
                        items.push(items[0])
                    }
                    else{
                        items.unshift(items[0])
                    }
                    
                }
            }
            else{
                for (let index = 0; index < newCantItems; index++) {
                    items.push(items[index])
                }
                for (let index = 0; index < newCantItems; index++) {
                    items.unshift(itemsReverse[index])
                }
            }
            setItems(items)   
        }
    },[scrollState.infinite])

    useEffect(()=>{
        if(references.carouselContainer){
            if(data.auto){
                const itemWidth = references.carouselContainer.current.scrollWidth / items.length
                let newScrollLeft = null
                var interval = setInterval(() => {
                    newScrollLeft = references.carouselContainer.current.scrollLeft + itemWidth
                    references.carouselContainer.current.scrollTo({
                      left: newScrollLeft,
                      behavior: 'smooth'
                    })
                    setScrollState({...scrollState,scrollLeft:newScrollLeft})
                }, data.time);
    
            }
            
        }
        
        return ()=>{
            interval && clearInterval(interval);
        }
    },[references])
    
    const scrollTo = () =>{
        if (data.auto) {
            references.carouselContainer.current.scrollTo({
                left:scrollState.scrollLeft,
                behavior:'smooth'
            })
        }
    }

    const scroll = (clientX)=>{
        if (scrollState.active) {
            const x = scrollState.clientXInit - clientX
            const newScrollLeft = scrollState.scrollLeftInit + x
            setScrollState({...scrollState,scrollLeft:newScrollLeft})
        }
        
    }
    const initScroll = (clientXInit)=>{
        const dataInit = {
            active:true,
            clientXInit:clientXInit,
            scrollLeftInit:references.carouselContainer.current.scrollLeft
        }
        setScrollState({...scrollState,...dataInit})
    }
    const endScroll = ()=>setScrollState({...scrollState,active:false})

    const nextItem = (itemWidth)=>{
        
        let newScrollLeft = references.carouselContainer.current.scrollLeft + itemWidth

        //if (itemWidth > 0) {
            if (newScrollLeft <  references.carouselContainer.current.offsetWidth && newScrollLeft >= 0) {
                references.carouselContainer.current.scrollTo({
                    left: newScrollLeft,
                    behavior: 'smooth'
                })
            }
        //}
        // else{
        //     if (newScrollLeft >  references.carouselContainer.current.offsetWidth) {
        //         references.carouselContainer.current.scrollTo({
        //             left: newScrollLeft,
        //             behavior: 'smooth'
        //         })
        //     }
        // }

        // references.carouselContainer.current.scrollTo({
        //     left: newScrollLeft,
        //     behavior: 'smooth'
        // })
                    setScrollState({...scrollState,scrollLeft:newScrollLeft})
            // let newScrollLeft = (scrollState.scrollLeft + itemWidth)
            // if (itemWidth > 0) {
            //     newScrollLeft = ((scrollState.scrollLeft + itemWidth)/itemWidth)*itemWidth
            //     if (newScrollLeft < (references.carouselContainer.current.scrollLeft - itemWidth)) {
            //         setScrollState({...scrollState,scrollLeft:newScrollLeft})
            //     }
            // }
            // else{
            //     newScrollLeft = (((scrollState.scrollLeft + itemWidth)/itemWidth)*itemWidth)+itemWidth
            //     if (newScrollLeft >= 0 ) {
            //         setScrollState({...scrollState,scrollLeft:newScrollLeft})
            //     }
                
            // }
            // newScrollLeft = itemWidth > 0  ? Math.floor(newScrollLeft) : Math.floor(newScrollLeft) + 1
            console.log(newScrollLeft);
            
    }
  return {
    items,
    scroll,
    initScroll,
    endScroll,
    setReferencesCarouselScroll,
    nextItem
  }
}
