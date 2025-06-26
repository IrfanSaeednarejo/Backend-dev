import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([])


  useEffect(() => { 
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error)
      })
  })

  return (
    <>
      <h1>Frontend App is Running</h1>
      {
        jokes.map((joke) => (
        <div key={joke.id}>
          <p>{joke.title}</p> 
          <p>{joke.punchline}</p>
        </div>
      ))
      }
      
    </>
  )
}

export default App
