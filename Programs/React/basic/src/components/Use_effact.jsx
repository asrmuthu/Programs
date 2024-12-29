import React, { useEffect, useState } from "react";


const Use_effact = ({query}) => {
  const [count, setCount] = useState(0);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [value, setValue] = useState(1);
  const [multiplier, setMultiplier] = useState(2);
  const [result, setResult] = useState('');
  const [trigger, setTrigger] = useState(false);
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);




  useEffect(() => {
    setMessage1("Component mounted!");
  }, []); // Empty dependency array: runs only on mount


  useEffect(() => {
    setMessage2(`Count changed to: ${count}`);
  }, [count]); // Runs whenever `count` changes


  useEffect(() => {
    setResult(value * multiplier);
  }, [value, multiplier]); // Runs whenever `value` or `multiplier` changes


  useEffect(() => {
    if (trigger) {
      setMessage('Effect triggered!');
    } else {
      setMessage('');
    }
  }, [trigger]); // Only runs when `trigger` changes


  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);


    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures it runs only on mount and unmount




  return (
    <div>
      Hello, World!
      <p>{message1}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>{message2}</p>
      </div>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <input
          type="number"
          value={multiplier}
          onChange={(e) => setMultiplier(Number(e.target.value))}
        />
        <p>Result: {result}</p>
      </div>
      <div>
        <button onClick={() => setTrigger(!trigger)}>Toggle Effect</button>
        <p>{message}</p>
      </div>
      <div>Elapsed Time: {seconds} seconds</div>
    </div>
  );
};


export default Use_effact;