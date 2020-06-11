import React from 'react';

export default function NasaApod(props) {

    const {img, title, explanation}= props
    

    return(
        <div>
            <img src={img} alt= 'Nasa Apod'></img>
            <h2>{title}</h2>
            <p>{explanation}</p>
        </div>
    )

}

