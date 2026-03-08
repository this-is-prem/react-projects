import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const generatepassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatepassword()
  }, [length, numberAllowed, charAllowed])

  const passRef = useRef(null)

  const copyPasswordToclipboard = () => {
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()
  }


  return (

    <div className="flex  justify-center items-center min-h-screen bg-[#d9e0a4]">
      <div className="  bg-[#1f5a74] text-[#d9e0a4] px-8 py-8 shadow-lg rounded-xl max-w-lg">
        <h1 className="text-2xl text-center font-bold  mb-4">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" name="" id="" value={password} className='rounded-lg outline-none w-full py-1 px-3 bg-[#d9e0a4] text-[#1f5a74]' placeholder='password' readOnly ref={passRef} />
          <button className='outline-none bg-black rounded-lg px-3 text-amber-50 font-bold' onClick={copyPasswordToclipboard}  >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" name="" id=""
              min={6}
              max={100}
              value={length}
              onChange={(e) => setlength(e.target.value)} />
            <label htmlFor="lenght"> length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id=""
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)} />
            <label htmlFor="number">numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id=""
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)} />
            <label htmlFor="characters">characters</label>
          </div>
        </div>
      </div>
    </div>

  )

}
export default App
