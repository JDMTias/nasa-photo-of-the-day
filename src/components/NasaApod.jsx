import React from 'react';
import Crabnebula from '../imgs/Crabnebula.jpg';
import Container from './container';
import Title from './Title'
import Estyle from './Explanation'


export default function NasaApod(props) {

    const {img, title, explanation,}= props
    

    return(
        <Container>
            <img src={img} alt= 'Nasa Apod'></img>
            <Title>{title}</Title>
            <Estyle>{explanation}</Estyle>
        </Container>
    )

}

