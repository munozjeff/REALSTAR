import React from "react";
import './styles.css'

function ImageandText({imageRoute, title, paragraph}){
    return(
        
            <div className="image-and-text-container">
            <div className="image-text-container">
                <img src={imageRoute}/>

            </div>
            <div className="text-cont">
                <h2>{title} </h2>
                <p>{paragraph}</p>
            </div>

        </div>
        
        
    )
}

export {ImageandText}