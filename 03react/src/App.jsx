
import './App.css'
import Card from './Card'

const myobj={
  name:"viral",
  age:45
}
const myarr=[1,2,3]

function App() {
  return (
    <>
    <Card name="viral"/>
    <Card obj={myobj}/>
    <Card myarr={myarr}/>
    <Card username="ViralThakkar"/>
    
    </>
  )
}

export default App
