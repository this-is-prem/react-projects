import { useState } from 'react'
import Card from './components/card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-red-400'>this is react</h1>
      <Card username='prem' post='dhali para' source='https://i.pinimg.com/736x/68/a7/39/68a739ee9fe997396263e982567d9e33.jpg' />
    </>
  )
}

export default App
