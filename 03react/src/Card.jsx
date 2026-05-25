const Card=(props)=>{
  console.log(props);
  
  return(
  
    <>
    <h2>{props?.username}</h2>
    <h2>{props?.obj?.name}</h2>
    <h2>{props?.myarr}</h2>
    {/* without this ? not work  */}
    </>
  )
}

export default Card;