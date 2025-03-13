import React, { useState } from 'react'
import CustomerView from './CustomerView'

const CustomerAdd = () => {
    const[val, setVal] = useState('')
    const[items, setItems] = useState([])

    const handleAdd = () => {
        setItems((previousState) => [...previousState, val])
        setVal(''); 
    }
    
    const handleDelete = (index) => {
        setItems(items.filter((_, i) => i !== index))
    }
  return (
    <>
    <div>
        <input type='text' onChange={(e) => setVal(e.target.value)} value={val}/>
        <button onClick={handleAdd}>Add</button>
    </div>
    <CustomerView items={items} handleDelete={handleDelete}/>
    </>
  )
}

export default CustomerAdd