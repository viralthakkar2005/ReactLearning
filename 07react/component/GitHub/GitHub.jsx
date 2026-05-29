import React, { useEffect, useState } from "react";

function GitHub(){
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])


return (
  <div>GitHub followers: {data.follwers}</div>
)
}



export default GitHub;