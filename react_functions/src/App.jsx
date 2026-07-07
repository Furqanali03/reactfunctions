import React from 'react'
import { useState } from 'react'

const App = () => {

  const [user, setUser] = useState({user: 'John', age: 30})

  function handleClick() {

    const newUser = {...user}
    newUser.user = "Ali"
    setUser(newUser)

  }



  // const [num, setNum] = useState(0)

  // function handleClick() {
  //   console.log('Button clicked!')
  //   setCount(count + 1)
  // }

  // function handleReset() {
  //   console.log('Reset button clicked!')
  //   setCount(0)
  // }


  return (
    <div>
    {/* <h1>The value of num is: {num}</h1>
      <button onClick={() => setNum(num + 1)}>Click me {num}</button>
      <button onClick={() => setNum(0)}>Reset</button> */}

      <h1>Welcome, {user.user}! your age is {user.age}</h1>
      <button onClick={handleClick}>Click me</button>

    </div>
  )
}

export default App
