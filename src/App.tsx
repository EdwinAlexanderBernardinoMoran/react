import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <p>This is a simple React application.</p>

      <h3>{ count }</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default App
