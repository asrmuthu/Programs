import { useState } from "react";

export default function App() {
  const [start, setStart] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // Store interval ID

  const startTimer = () => {
    const id = setInterval(() => {
      setStart((prevTimer) => prevTimer + 1);
    }, 1000);

    setIntervalId(id); // Store interval ID
  };

  const stopTimer = () => {
    setIntervalId(null); // Reset interval ID
  };

  const resetTimer = () => {
    setStart(0); // Reset timer value
    setIntervalId(null); 
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <span>{start} mins</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
