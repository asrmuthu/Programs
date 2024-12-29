import React from 'react'
import { useState } from 'react';


const EventFunction = () => {
    const handleClick1 = (e) => {
            console.log(e); // Logs the entire event object
        };
        const handleClick2 = (e) => {
            console.log(e.target); // Logs the target element
        };
        const handleClick3 = (e) => {
            console.log(e.target.type); // Logs the type of the target element (e.g., "button")
        };
        const handleClick4 = (e) => {
            console.log(e.target.innerText); // Logs the inner text of the clicked button
        };
   
        const [inputValue, setInputValue] = useState(""); // State for managing input value
        const handleChange5 = (e) => {
            setInputValue(e.target.value); // Updates state with the current input value
        };
   
        return (
            <div>
                <h3>Event Functions</h3>
                <button onClick={handleClick1}>Button 1</button>
                {/* Logs event object */}
                <button onClick={handleClick2}>Button 2</button>
                {/* Logs target element */}
                <button onClick={handleClick3}>Button 3</button>
                {/* Logs type of the element */}
                <button onClick={handleClick4}>Button 4</button>
                {/* Logs inner text of the button */}
               
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange5} // Logs and updates the state with input value
                    placeholder="Type something"
                />
                <p>Current Input: {inputValue}</p>
                {/* Display the current input value */}
            </div>
        );
    };
export default EventFunction