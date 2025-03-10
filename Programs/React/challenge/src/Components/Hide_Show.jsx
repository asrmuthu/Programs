import React from 'react'
import { useState } from 'react'

const Hide_Show = () => {
    const [show, setShow] = useState(true)
    const hideContent = () => {
        setShow(!show)
    }
  return (
    <div>
        <button onClick={hideContent}>
            {show ? 'Hide' : 'Show'}
        </button>
    {show && <p>Content</p>}
    </div>
  )
}

export default Hide_Show