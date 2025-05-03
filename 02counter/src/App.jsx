import React from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(5)

// let counter =5
const addValue = () => {
  console.log("Clicked", counter);
 counter = counter + 1
setCounter(counter)
}
const removeValue = () => {
  console.log("clicked", counter);
  counter--
  setCounter(counter)
}
  return (
    <>
  <h1>Chai aur React</h1>
  <h2>Counter value: {counter}</h2>

  <button
  onClick={addValue}
  >Add value</button>
  <br /> <br />
  <button
  onClick={removeValue}
  >Remove value</button>
    </>
  )
}

export default App
