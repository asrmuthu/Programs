import React from 'react'


const FunctionCalling = () => {
    const handleclick1 = () => {
        console.log('Button 1 clicked')
    }
    const handleclick2 = () => {
        console.log('Button 2 clicked')
    }
    const handleclick3 = (name) => {
        console.log(`Button 3 clicked ${name}`)
    }
  return (
    <div>FunctionCalling
        <button onClick={handleclick1}>Button 1</button>
        {/* simple function, without parameter */}
        <button onClick={handleclick2()}>Button 2</button>
        {/* arrow function use pannama bracket functionna add panna, function first ye render agikuttum, so namma click pannalam onnu agathu.
Don’t use this type */}
        <button onClick={() => handleclick3('Muthu')}>Button 3</button>
        {/* function with parameter passing*/}
    </div>
  )
}


export default FunctionCalling