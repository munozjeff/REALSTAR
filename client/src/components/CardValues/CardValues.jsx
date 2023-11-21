import React from "react";
import './styles.css'

function CardValues({imageRoute,title,description}){
    return(
        <>
            <div className="card-value-container">

                <div className="card-value-img-container">
                    <img src={imageRoute} alt="value-image"/>

                </div>
                <div className="value-title">
                        <h2>{title}</h2>
                </div>
                <div className="value-description">
                    <p>{description}</p>
                </div>

            </div>
        </>
    )
}

export {CardValues}