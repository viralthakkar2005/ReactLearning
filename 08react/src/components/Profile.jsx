import React,{useContext} from "react";
import UserContext from "../context/UserContext";

export default function Profile(){

  const {user}=useContext(UserContext);
  
  return(
    <>
      <h1>{user}</h1>
    </>
  )
}