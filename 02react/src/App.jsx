import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter]=useState(5)
  //use state return the array in first index it's variable 
  //and sec is method 

  // let counter=5;

  const addValue=()=>{
    //counter++;
    setCounter(counter+1)
    console.log(counter);
  }

  const removeValue=()=>{
    if(counter>1){
      setCounter(counter-1)
    }
    console.log(counter);
  }

  return (
    <>
      <h1>viral</h1>
      <h2>Counter value {counter}</h2>

      <button
        onClick={addValue}
      >
        add value
      </button>
      <br />
      <button
      onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
