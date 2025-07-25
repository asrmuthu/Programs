import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./slice1";

const Counter = () => {
  const count = useSelector((state) => state.customer11.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment(4))}>Add</button>
    </div>
  );
};

export default Counter;
