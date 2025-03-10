import React, { useState } from 'react'

const ButtonDisabled = () => {
    const [val, setVal] = useState ('')
  return (
    <div>

    <input type='text' onChange={(e) => {
        setVal(e.target.value)
    }} />
    {val.length < 1 ? <button disabled>Button</button> : <button>Button</button>}
    </div>
  )
}

export default ButtonDisabled