import React, { useState } from "react";

function IncrementalCounter() {
  // 'count' holds the current total value.
  // 'clickNumber' keeps track of which click we're on.
  const [count, setCount] = useState(10);
  const [clickNumber, setClickNumber] = useState(1);

  const handleClick = () => {
    // Increment the click count first.
    setClickNumber(clickNumber + 1);
    
    // Then add the new click number to the existing total.
    setCount(prevCount => prevCount + clickNumber);
  };

  return (
    <div>
      <h2>Incremental Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default IncrementalCounter;
