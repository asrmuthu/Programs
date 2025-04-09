// components/Counter.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import hooks from react-redux
import { increment, decrement } from './slice1'; // Import actions

const Counter1 = () => {
  // Use useSelector to access the count from the Redux store
  const count = useSelector((state) => state.counter.count);
  
  // Use useDispatch to dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter1;