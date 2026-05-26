import { useState } from 'react'

import './App.css'



function App() {
  const [color, setColor] = useState('olive')

  function green(){
  setColor("green");
}


  return (
    <div className='w-full h-screen'
    style={{ backgroundColor: color }}
    >
      <button
      className='border-2 '
      // onclick need the one function
      onClick={green}
      >green</button>
      <button
        className='border-2 '
      onClick={()=>setColor("black")}
      >
      black</button>

      <button
        className='border-2 '
      onClick={()=>{
        return setColor("yellow")
      }}
      >
      yellow</button>
    </div>   
  )
}

export default App
