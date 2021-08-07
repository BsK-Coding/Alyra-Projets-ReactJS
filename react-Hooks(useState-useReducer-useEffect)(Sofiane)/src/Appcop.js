import React, { useState } from 'react'

function App() {
  // states
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    //event.target.value
    setCount(count - 1)
  }

  const handleStepChange = (event) => {
    //event.target.value
    setCount(count - 1)
  }

  return (
    <>
      <h1>Hello HardFork</h1>
      <p>count:{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <label htmlFor="step">step:</label>
      <input id="step" text="number" value={step} onChange={handleStepChange}></input>
    </>
  )
}

export default App