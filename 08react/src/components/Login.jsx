//this page store the data in context throught the setUser method 

import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";


function Login(){

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  const {setUser}=useContext(UserContext);      //get the method from the context

  const handleSubmit=(e)=>{
    e.preventDefault()
    setUser(username);      
  }


  return(
    <div>
      <h2>login</h2>
      
      <input 
      type="text" 
      value={username}
      onChange={(e)=>{setUsername(e.target.value)}}
      placeholder="username"  />


      <input 
      type="text"
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
      placeholder="password"  />
      
      
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login;
