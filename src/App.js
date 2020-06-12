import React, {useState, useEffect} from "react";
import axios from 'axios'
import GlobalFonts from './styles/Fonts'
import NasaLogo from './components/nasaLogo'
import NasaApod from './components/NasaApod';
import {BASE_URL, API_KEY} from './constants/urlandkey';
import "./App.css";



function App() {

  const [nasaData, setNasaData] = useState()

  // useEffect(() => {
  // axios.get(`${BASE_URL}${API_KEY}`)
//     .then(response => {
//       console.log(response)
//         setNasaData(response.data)
//       console.log(response.data)
      
//     })

//     .catch(err => {
//       debugger
//     })

// }, [])
  console.log('test')

  return (
    <div className="App">
      <GlobalFonts/>
      <NasaLogo/>
      {/* {!nasaData ? 'Loading Image...':
          <NasaApod img= {nasaData.hdurl} title= {nasaData.title} explanation = {nasaData.explanation}/>} */}
          <NasaApod/>
    </div>
  );
}

export default App;
