import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numallw, setNumallw] = useState(false);
  const [charw, setCharw] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordgen = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numallw) str += "0123456789"
    if (charw) str += "!@#$%^&*()_+[]{}~=-/<>,.?"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numallw, charw, setPassword])

  const copypassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);

    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { passwordgen() }, [length, numallw, charw, passwordgen]);

  return (
    <>
      <div className='min-h-screen flex items-center justify-center'>
        <div className='w-full max-w-md mx-auto  shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
          <h1 className='text-2xl text-center text-white my-3'>Password genarator:</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-white' placeholder='password' readOnly ref={passwordRef} />
            <button className='outline-none bg-orange-600 text-white px-3 py-0.5 shrink-0'
              onClick={copypassword}
            >copy</button>
          </div>
          <div className='flex text-sm gap-x-2 m-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={100} value={length} className='cursor-pointer'
                onChange={(e) => { setlength(e.target.value) }} />
              <label > length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1' >
              <input type="checkbox"
                defaultChecked={numallw}
                id="numberinput"
                onChange={() => {
                  setNumallw((prev) => !prev);
                }}
              />
              <label htmlFor="">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1' >
              <input type="checkbox"
                defaultChecked={charw}
                id="charinput"
                onChange={() => {
                  setCharw((prev) => !prev);
                }}
              />
              <label htmlFor="">Characters</label>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
