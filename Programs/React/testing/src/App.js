import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter APP</h1>
      <h1 data-testid="count">{count}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default App;