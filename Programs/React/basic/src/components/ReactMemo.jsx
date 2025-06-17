import React from 'react'
import { useState } from "react";
import ReactMemo1 from './ReactMemo1';
import ReactMemo2 from './ReactMemo2';

const ReactMemo = () => {
    const [count1, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
const handleAdd1 = () => {
    setCount(prevCount => prevCount + 1); 
}

const handleAdd2 = () => {
    setCount2(prevCount1 => prevCount1 + 1)
}

  return (
    <div>ReactMemo
        <button onClick={handleAdd1}>Add1</button>
        <button onClick={handleAdd2}>Add2</button>
        <ReactMemo1 count1={count1} />
        <ReactMemo2 count2={count2} />
    </div>
  )
}

export default ReactMemo