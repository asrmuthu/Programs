import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./createSlice_com";

const Counter = () => {
  const count = useSelector((state) => state.customer11.count); // ✅ Fixed state key
  const dispatch = useDispatch(); // ✅ Dispatch actions

  return (
    <div>
      <h1>Counter APP</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
    </div>
  );
};

export default Counter;
