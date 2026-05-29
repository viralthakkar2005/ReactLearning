import React from "react";
import { useParams } from "react-router-dom";

function User(){
  const {userId}=useParams();
  //it's return the object so we destrcture the object
  //const param=useParams();  how can do like this 

  return(
    <div>
      User:{userId}
      {/* User:{param.userId} */}
    </div>
    
  )
}

export default User;