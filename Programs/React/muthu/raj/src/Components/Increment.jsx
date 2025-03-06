import React from 'react'
import { useState } from 'react'


const Increment = () => {

  const [val, setVal] = useState("");
  const [isAdded, setIsAdded] = useState(false);


  const Increment = () => {
    setIsAdded(true);
    setVal(Number(val) + 1);
  }
  return (
    <div>
     <h1> Increment</h1>
     <input type="number" value={val} onChange={(e) => setVal(e.target.value)}/>
     <button onClick={Increment}>Add</button>
      {isAdded && <p>{val}</p> }  
    </div>
  )
}

export default Increment