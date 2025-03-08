import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";

const Counter = () => {
  const count = useSelector((state) => state.counter1.count); // Get state
  const dispatch = useDispatch(); // Dispatch actions

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
    </div>
  );
};

export default Counter;
