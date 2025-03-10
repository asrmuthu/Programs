import React from 'react'
import {useState} from 'react'

const DataBinding = () => {
    const [data, setData] = useState('')


    const handleChange = (e) =>{
        setData(e.target.value)
    }
  return (
    <div>
        <h1>DaTA Binding</h1>
        <input type='text' onChange={handleChange}/>
        <p>{data}</p>
    </div>
  )
}

export default DataBinding