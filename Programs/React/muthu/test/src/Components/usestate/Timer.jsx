import React from "react";
import { useState } from "react";

const App = () => {
  const [start, setStart] = useState(0);
  const [timer, setTimer] = useState(null);

  const startCount = () => {
    const id = setInterval(() => {
      setStart((prevCount) => prevCount + 1);
    }, 1000);

    setTimer(id);
    return (timer)
  };

  const stopCount = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const resetCount = () => {
    clearInterval(timer);
    setTimer(null);
    setStart(0);

  };

  return (
    <div>
      <p> Timer {start} </p>
      <button onClick={startCount}>Start</button>
      <button onClick={stopCount}>Stop</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default App;
