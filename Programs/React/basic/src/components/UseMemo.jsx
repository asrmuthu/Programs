import React, { useMemo, useState } from 'react'

const UseMemo = () => {
const[number, setNumber] = useState('')


const handleChange = (e) => {
    setNumber(e.target.value)
}

const handleFactorial = (n) => {
for(i=0; i<=n; i++){
 result *= i;
}

return result
}

useMemo(() => {
    handleFactorial(number)
},[])

  return (
    <div>Factorial
        <input type='number' value={number} onChange={handleChange} />
        <p>factorial of  {number} value is {}</p>
    </div>
  )
}

export default UseMemo