//user context provider is component. it's logical component(no ui) that hold the state(Data) and wrap around whole app. so any one can 
//use the data


import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{   
  const [user,setUser]=useState(null);           //it's baiscally data that you use any where. example the globle variable

  const values={user,setUser};    //all the data that you store in context wrap into the values as object

  return (
    
    // value={values} it's put data in to the context. it's baiscally prop. but it's usercontext props
    // .provider is propety that help the store data into the context. 
    <UserContext.Provider value={values}>  
        {children} 
        //so userContextProvider ne wrap karva ma ave around the whole app. so all component as it is re tena mate  
    </UserContext.Provider>
  )
}

export default UserContextProvider;