import React from 'react';
import Crabnebula from '../imgs/Crabnebula.jpg';
import Container from './container';
import Title from './Title'
import Estyle from './Explanation'


export default function NasaApod(props) {

    const {img, title, explanation,}= props
    

    return(
        <Container>
            <img src={Crabnebula} alt= 'Nasa Apod'></img>
            <Title>{title}Crab Nebula</Title>
            <Estyle>{explanation}Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.</Estyle>
        </Container>
    )

}

