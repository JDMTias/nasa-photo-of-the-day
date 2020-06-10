import React from 'react';

export default function NasaApod(props) {

    const {img, title}= props
    

    return(
        <div>
            <img src={img} alt= 'Nasa Apod'></img>
            <h2>{title}</h2>

        </div>
    )

}

