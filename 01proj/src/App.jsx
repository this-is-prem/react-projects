import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  function addValue() {
    setCounter(counter + 1)
  }
  function removeValue() {
    setCounter(counter - 1);
  }
  //let counter = 0
  return (
    <>
      <h1>counter : {counter}</h1>
      <button onClick={addValue}>add value </button>{""}
      <button onClick={removeValue}>remove value </button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
