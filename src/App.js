import React, {useState, useEffect} from "react";
import axios from 'axios'
import NasaApod from './components/NasaApod';
import {BASE_URL, API_KEY} from './constants/urlandkey';
import "./App.css";



function App() {

  const [nasaData, setNasaData] = useState()

  useEffect(() => {
  axios.get(`${BASE_URL}${API_KEY}`)
    .then(response => {
      console.log(response)
        setNasaData(response.data)
      console.log(response.data)
      
    })

    .catch(err => {
      debugger
    })

}, [])
  console.log('test')

  return (
    <div className="App">
      <h1>NASA</h1>
      {!nasaData ? 'Loading Image...':
          <NasaApod img= {nasaData.hdurl} title= {nasaData.title} explanation = {nasaData.explanation}/>}
    </div>
  );
}

export default App;
