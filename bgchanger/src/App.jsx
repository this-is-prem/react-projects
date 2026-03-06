import { useState } from 'react'

import './App.css'

function App() {
  const [color, setBgColor] = useState('#DBE3E9')
  /* function changeColor(color) {
    setBgColor(color);
  } */

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center bg-white px-3 py-2 rounded-3xl shadow-lg '>
          <button className=' outline-none px-4 py-1 rounded-full text-pink-100 shadow-lg bg-[#344C4B]' onClick={() => setBgColor('#344C4B')} >Teal</button>
          <button className='ml-2 outline-none px-4 py-1 rounded-full text-pink-100 shadow-lg bg-[#E5765C]' onClick={() => setBgColor('#E5765C')}>Coral</button>
          <button className='ml-2 outline-none px-4 py-1 rounded-full text-gray-500 shadow-lg bg-[#DFE0C3]' onClick={() => setBgColor('#DFE0C3')}>Spring</button>
        </div>
      </div>
    </div>
  )
}

export default App
