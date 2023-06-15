import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppies);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setPuppies((count) => count + 1)}>
          count is {puppies}
        </button>
      </div>
    </>
  )
}

export default App
