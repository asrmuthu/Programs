import { useState } from "react";

export default function App() {
  const [val, setVal] = useState([]); // Store values as an array
  const [input, setInput] = useState(""); // Store input value separately

  const handleChange = (e) => {
    setInput(e.target.value); // Update input value
  };

  const Add = () => {
    if (input.trim() === "") return; // Prevent adding empty values
    setVal([...val, input]); // Add input to the list
    setInput(""); // Clear input field
  };

  const Delete = (index) => {
    setVal(val.filter((data, i) => i !== index)); // Remove the item at the given index
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      Add(); // Call Add() when Enter key is pressed
    }
  };


  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" value={input} onChange={handleChange} onKeyDown={handleKeyDown} />
      <button onClick={Add}>Add</button>
      <ol>
        {val.map((data, index) => (
          <li key={index}>
            {data} <button onClick={() => Delete(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
