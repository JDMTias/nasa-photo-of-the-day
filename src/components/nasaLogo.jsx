import React, {useState} from 'react'
import Worm from '../imgs/NasaWorm.png'
import NasaOg from '../imgs/NasaOG.png'


const NasaLogo = () => {

const [logoIndex, setLogoIndex] = useState(0)

const logoImages = [Worm, NasaOg];

function clickHandler(event) {
    if(logoIndex === logoImages.length -1 ){
        setLogoIndex(0)
    }else{
        setLogoIndex(logoIndex + 1);
    }
}

return(
    <img className='logo' src={logoImages[logoIndex]} alt= 'NasasLogo' onClick={clickHandler}/>
)

}


export default NasaLogo