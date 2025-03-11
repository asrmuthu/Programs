import { useState, useRef } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null); // Use a ref to keep track of the interval

  const handleStart = () => {
    if (!intervalRef.current) { // Prevent multiple intervals from being created
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1); // Use functional state update
      }, 1000);
    }
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // Reset the interval reference
    }
  };

  const handleReset = () => {
    setTimer(0); // Reset the timer to 0
  };

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
