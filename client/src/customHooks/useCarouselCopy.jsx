import React, { useEffect, useState } from 'react'

export const useCarousel = (dataInit) => {
    const [data, setData] = useState(dataInit)
    const [items,setItems] = useState(null)
    const [scrollState, setScrollState] = useState(
        {
            initScroll:false,
            initX:null,
            initScrolleft:null,
            scrollLeft:0
        })
    // const [width, setWidth] = useState(0)

    useEffect(()=>{
        if (data.children !== null && data.carouselContainer) {
            if (data.infinite) {
                const newCantItems = data.children.length > 3 ? 3 : data.children.length
                let childrenReverse = [...data.children]
                childrenReverse  = childrenReverse.reverse()
                let items = [...data.children]
                if (newCantItems < 2) {
                    items.push(items[0])
                    items.push(items[0])
                    items.push(items[0])
                    items.unshift(items[0])
                    items.unshift(items[0])
                    items.unshift(items[0])
                }
                else{
                    for (let index = 0; index < newCantItems; index++) {
                        items.push(items[index])
                    }
                    for (let index = 0; index < newCantItems; index++) {
                        items.unshift(childrenReverse[index])
                    }
                }
                
                setItems(items)
            }
            else{
                // console.log(data.children);
                setItems(data.children)
            }
        }

    },[data.children,data.infinite,data.carouselContainer])
    
    useEffect(() => {
        const updateCarouselWidth = ()=>{
            if (data.carouselContainer && items) {
                const itemWidth = data.carouselContainer.current.scrollWidth / items.length
                if (data.items === 1) {
                    data.carouselContainer.current.style.width = `${itemWidth}px`
                }
                else if (data.items > 1){
                    const width = itemWidth * data.items
                    if (width >= window.innerWidth * 0.95) {
                        data.carouselContainer.current.style.width = `${Math.floor((window.innerWidth) * 0.95 / itemWidth) * itemWidth}px`
                    }
                    else{
                        data.carouselContainer.current.style.width = `${width}px`
                    }
                    
                }
                else{
                    data.carouselContainer.current.style.width = `100%`
                }
                // if(items.length > data.children.length){
                //     console.log(itemWidth);
                // }
                window.addEventListener('resize',updateCarouselWidth)
            }
            
            if (data.carouselContainer && items && data.infinite) {
                const itemWidth = data.carouselContainer.current.scrollWidth / items.length
                const newScrollLeft = itemWidth * 3
                data.carouselContainer.current.scrollLeft = newScrollLeft
                setScrollState({...scrollState,scrollLeft:newScrollLeft})
            //     const itemWidth = data.carouselContainer.current.scrollWidth / items.length
            //     const newScrollLeft = ((items.length - data.children.length)/2)*itemWidth
            //     setScrollState({...scrollState,scrollLeft:newScrollLeft})
            //     data.carouselContainer.current.scrollLeft = newScrollLeft
            }else if(data.carouselContainer && items){
                console.log(items);
                setScrollState({...scrollState,scrollLeft:0})
            }
        }
        
        updateCarouselWidth()
        
        return () => {
            window.removeEventListener('resize',updateCarouselWidth)
        }
    }, [data.carouselContainer,items,data.infinite])

    useEffect(() => {
        let interval = null
        let endScrollHandler = null
        if (data.carouselContainer && data.auto && data.time && items) {
            const itemWidth = data.carouselContainer.current.scrollWidth / items.length
            let newScrollLeft = null
            interval = setInterval(() => {
                newScrollLeft = data.carouselContainer.current.scrollLeft + itemWidth
                data.carouselContainer.current.scrollTo({
                  left: newScrollLeft,
                  behavior: 'smooth'
                });
                setScrollState({...scrollState,scrollLeft:newScrollLeft})
                // console.log('hhhh');
                // setScrollState({...scrollState,scrollLeft:newScrollLeft})
                // console.log(data.carouselContainer.current.scrollLeft);
                // if (data.carouselContainer.current.scrollLeft === newScrollLeft) {
                //     console.log('llllllllll');
                // }
            }, data.time);
            endScrollHandler = () => {
                const scrollLeft = newScrollLeft
                if (data.carouselContainer.current.scrollLeft === scrollLeft) {
                    if (scrollLeft <= itemWidth) {
                        const newScrollLeft = (itemWidth * data.children.length) + itemWidth
                        data.carouselContainer.current.scrollLeft = newScrollLeft
                        setScrollState({...scrollState,scrollLeft:newScrollLeft})
                    }
                    else if(scrollLeft + data.carouselContainer.current.clientWidth >= (data.carouselContainer.current.scrollWidth  - itemWidth)){
                        const newScrollLeft = (itemWidth * data.children.length) - data.carouselContainer.current.clientWidth
                        data.carouselContainer.current.scrollLeft = newScrollLeft
                        setScrollState({...scrollState,scrollLeft:newScrollLeft})
                    }
                }   
            }
            data.carouselContainer.current.addEventListener('scroll', endScrollHandler);
        }
          return () => {
            clearInterval(interval);
            // data.carouselContainer.current.removeEventListener('scroll', endScrollHandler);
          }
    }, [data.carouselContainer,data.auto,data.time,items])
    
    useEffect(()=>{
        if (scrollState.scrollLeft && data.carouselContainer) {
            const itemWidth = data.carouselContainer.current.scrollWidth / items.length
            if (scrollState.initScroll) {
                if (scrollState.scrollLeft <= itemWidth) {
                    const newScrollLeft = (itemWidth * data.children.length) + itemWidth
                    data.carouselContainer.current.scrollLeft = newScrollLeft
                    setScrollState({...scrollState,scrollLeft:newScrollLeft})
                }
                else if(scrollState.scrollLeft + data.carouselContainer.current.clientWidth >= (data.carouselContainer.current.scrollWidth  - itemWidth)){
                    const newScrollLeft = (itemWidth * data.children.length) - data.carouselContainer.current.clientWidth
                    data.carouselContainer.current.scrollLeft = newScrollLeft
                    setScrollState({...scrollState,scrollLeft:newScrollLeft})
                }
                else{
                    // console.log(scrollState.scrollLeft);
                    data.carouselContainer.current.scrollLeft = scrollState.scrollLeft
                }
                // data.carouselContainer.current.scrollLeft = scrollState.scrollLeft
                
            }
            console.log(scrollState.scrollLeft);
        }
        
    },[scrollState.scrollLeft,scrollState.initScroll,data.carouselContainer])

    // useEffect(()=>{
    //     if(!scrollState.initScroll && data.carouselContainer){
    //         scrollTo(scrollState.scrollLeft)
    //     }
    // },[scrollState.initScroll,data.carouselContainer])

    const setDataInit = (dataInit) => {setData({...data,...dataInit})}
    
    const setInitScroll = (clientX) =>setScrollState(
        {
            ...scrollState,
            initScroll:true,
            initClientX:clientX,
            initScrolleft:data.carouselContainer.current.scrollLeft
        })
    const scroll = (clientX) =>{
        if (scrollState.initScroll) {
            const x = scrollState.initClientX - clientX
            
            // if ((scrollState.initScrolleft + x) <= data.children) {
            //     console.log('menor');
            // }
            // data.carouselContainer.current.scrollLeft = scrollState.initScrolleft + x
            const newScrollLeft = scrollState.initScrolleft + x
            console.log(newScrollLeft);
            setScrollState({...scrollState,scrollLeft:newScrollLeft})
        }
        
    }
    const setEndScroll = () =>{
        // setScrollState(
        //     {
        //         ...scrollState,
        //         initScroll:false,
        //     }
        // )
        if(items){
            const itemWidth = data.carouselContainer.current.scrollWidth / items.length
            const newItems = data.carouselContainer.current.scrollLeft / itemWidth
            const completedItems = Math.floor(newItems)
            const rest = newItems - completedItems
            let scrollLeft = 0
            if (rest >= 0.5) {
                scrollLeft = (completedItems * itemWidth ) + itemWidth
            }
            else{
                scrollLeft = completedItems * itemWidth
            }
            setScrollState({...scrollState,scrollLeft:scrollLeft,initScroll:false})
            scrollTo(itemWidth,scrollLeft)
        }
    }

    const scrollTo = (itemWidth,scrollLeft) =>{
        const endScrollHandler = () => {
            if (data.carouselContainer.current.scrollLeft === scrollLeft) {
                if (scrollLeft <= itemWidth) {
                    const newScrollLeft = (itemWidth * data.children.length) + itemWidth
                    data.carouselContainer.current.scrollLeft = newScrollLeft
                    setScrollState({...scrollState,scrollLeft:newScrollLeft})
                }
                else if(scrollLeft + data.carouselContainer.current.clientWidth >= (data.carouselContainer.current.scrollWidth  - itemWidth)){
                    const newScrollLeft = (itemWidth * data.children.length) - data.carouselContainer.current.clientWidth
                    data.carouselContainer.current.scrollLeft = newScrollLeft
                    setScrollState({...scrollState,scrollLeft:newScrollLeft})
                }
            }   
        }
        data.carouselContainer.current.addEventListener('scroll', endScrollHandler);
        data.carouselContainer.current.scrollTo({
            left:scrollLeft,
            behavior:'smooth'
        })
    }

  return{
    items,
    setItems,
    setDataInit,
    setInitScroll,
    setEndScroll,
    scroll,
  }
}
