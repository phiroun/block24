import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppies);

  return (
    
  )
}

export default App
