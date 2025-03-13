import React, { useState } from 'react'
import CustomerView from './CustomerView'
import {addCustomer} from '../customerSlice'
import {useDispatch} from 'react-redux'


const CustomerAdd = () => {
    const[val, setVal] = useState('')
    // const[items, setItems] = useState([])
  const dispatch = useDispatch()

    const handleAdd = () => {
        // setItems((previousState) => [...previousState, val])
        dispatch(addCustomer(val))
        setVal(''); 
    }
    
  return (
    <>
    <div>
        <input type='text' onChange={(e) => setVal(e.target.value)} value={val}/>
        <button onClick={handleAdd}>Add</button>
    </div>
    </>
  )
}

export default CustomerAdd