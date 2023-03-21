
import {useState} from "react"

function Counter (){

  const [counter,setCounter] = useState(0);

const handleChange = (value)=> {
  setCounter(counter+value)
}
const handleChanges = (values)=>{
  setCounter(counter*2)
}

  return (
    <div>
    <h1> Counter:{counter}</h1>
    <button onClick = {()=>{
      handleChange(1)
    }}>Add</button>
     <button
    onClick={()=>{ if(counter>=1){
      handleChange(-1)}
    }}> Deduct 1 </button>
    <button onClick={()=>{
      handleChanges(2)    
    }}> Double</button>
    </div>
  );
}

export {Counter}