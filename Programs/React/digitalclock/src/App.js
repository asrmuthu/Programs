import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId); // Cleanup the interval
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString(); // Format as HH:MM:SS
    };
  return (
        <div className="container">
            <h1 className='title'>Digital Clock</h1>
            <div className='clock'>{formatTime(time)}</div>
        </div>
    );
}

export default App;
