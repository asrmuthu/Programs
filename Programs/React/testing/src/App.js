import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <h1 data-testid="count">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button> {/* Button text is "Increment" */}
    </div>
  );
};

export default App;
