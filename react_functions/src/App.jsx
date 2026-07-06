import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  function handleClick() {
    console.log('Button clicked!')
    setCount(count + 1)
  }

  function handleReset() {
    console.log('Reset button clicked!')
    setCount(0)
  }


  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleReset}>Reset</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default App
