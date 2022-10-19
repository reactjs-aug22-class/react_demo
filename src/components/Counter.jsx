import React, { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(prev => prev + 1)
  }

  const decrement = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span className="mx-4">{counter}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter
