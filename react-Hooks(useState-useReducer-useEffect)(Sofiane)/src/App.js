import React, { useEffect, useReducer, useState } from 'react'
import soundFile from './res/sounds/ineedmoney.mp3'

const NumberInput = ({
  id,
  type = 'text',
  value,
  onInputChange,
  isDisabled,
  children,
}) => {
  return (
    <>
      {console.log('NumberInput draw')}
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        disabled={isDisabled}
      />
    </>
  )
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step }
    case 'DECREMENT':
      return { ...state, count: state.count - state.step }
    case 'SET_STEP':
      return { ...state, step: action.step }
    case 'RESET':
      return { ...state, count: 0 }
    default:
      throw new Error(`Unhandled action ${action.type} in counterReducer`)
  }
}

const counterInitialState = {
  count: 0,
  step: 1,
}

const Counter = ({ initialStep, onCount, isDisabled }) => {
  const [counterState, counterDispatch] = useReducer(counterReducer, {
    ...counterInitialState,
    step: initialStep,
  })

  const handleIncrement = () => {
    counterDispatch({ type: 'INCREMENT' })
    onCount((prev) => Number(prev) + 1)
  }

  const handleDecrement = () => {
    counterDispatch({ type: 'DECREMENT' })
    onCount((prev) => Number(prev) + 1)
  }

  const handleChangeStep = (event) => {
    if (!isNaN(event.target.value)) {
      counterDispatch({ type: 'SET_STEP', step: Number(event.target.value) })
    }
  }

  const handleReset = () => {
    counterDispatch({
      type: 'RESET',
      step: 0,
    })
  }

  return (
    <>
      {console.log('Counter draw')}
      <p>
        counter: {counterState.count}{' '}
        <button onClick={handleReset} disabled={isDisabled}>
          reset
        </button>
      </p>
      <button onClick={handleIncrement} disabled={isDisabled}>
        <strong>+</strong>
      </button>
      <button onClick={handleDecrement} disabled={isDisabled}>
        <strong>-</strong>
      </button>
      <NumberInput
        id={counterState.step}
        type="text"
        isDisabled={isDisabled}
        value={counterState.step}
        onInputChange={handleChangeStep}
      >
        step:
      </NumberInput>
    </>
  )
}

// Custom hooks
const useLocalStorage = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState)

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])

  return [value, setValue]
}

function App() {
  const [nbOperations, setNbOperations] = useLocalStorage('nbOperations', 0)
  const [isDisabled, setIsDisabled] = useState(false)

  const clearLocalStorage = () => {
    setNbOperations(0)
    setIsDisabled(false)
  }

  useEffect(() => {
    if (nbOperations > 20) {
      const disable = async () => {
        setIsDisabled(true)
        try {
          const audio = new Audio(soundFile)
          await audio.play()
        } catch (e) {
          console.log(e)
        }
      }
      disable()
    }
  }, [nbOperations])

  return (
    <>
      <h1>Hello HardFork</h1>
      <p>nb operations: {nbOperations}</p>
      {nbOperations > 20 && (
        <>
          <h3 style={{ color: 'red' }}>
            You have reachead the limit, please{' '}
            <a
              href={
                'https://thephnompen.files.wordpress.com/2012/02/i-am-not-a-scammer-he-is.jpg'
              }
            >
              PAY
            </a>
          </h3>
          <button onClick={clearLocalStorage}>clear local storage</button>
        </>
      )}
      <Counter
        initialStep={1}
        onCount={setNbOperations}
        isDisabled={isDisabled}
      />
    </>
  )
}
export default App
