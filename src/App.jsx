// import { useState, useEffect } from 'react'
import process from "../.eslintrc.cjs"

import './App.css'

function App() {
  
  fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error("Erreur lors de la requête à l'API RAWG:", err));


  return (
    <>
      <h1>Everyone games</h1>
      <ul>
        </ul>   
    </>
  )
}

export default App
