import React from 'react'
import { useState } from "react";


const SimpleUseState = () => {
    const [count, setCount] = useState(100);
   // const [name, setName] = useState(); -> don't use empty parameter function because every action it will run
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    //The variable name prevCount is just a placeholder; it can be any valid variable name
    const decrement = () => {
        setCount(prevCount1 => prevCount1 - 1);
    }
    //The variable name prevCount1 is just a placeholder; it can be any valid variable name
  return (
    <>
    <div>UseState</div>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
    </>
  )
}
export default SimpleUseState;