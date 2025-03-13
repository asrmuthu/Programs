import React from 'react';
import {useSelector} from 'react-redux'
import {deleteCustomer} from '../customerSlice'
import {useDispatch} from 'react-redux'


const CustomerView = () => {
  const items = useSelector((state) => state.customer1)
    const dispatch = useDispatch()
  
    const handleDelete = (index) => {
      dispatch(deleteCustomer(index))
    }

  return (
    <div>
      <h3>Customer List</h3>
        <ol>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ol>
    </div>
  );
};

export default CustomerView;
