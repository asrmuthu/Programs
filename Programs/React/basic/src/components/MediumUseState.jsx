import { useState } from "react";
const MediumUseState = () => {
const [num, setNum] = useState(1);
  const handleAdd = () => {
    setNum((currentValue) => currentValue + 1);
  };
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);


  const [name, setName] = useState("");
  const [age, setAge] = useState("20");
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleAdd}>Add</button>
      <br />
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Current value: {inputValue}</p>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"}Content
      </button>
      {isVisible && <p>This is some content that can be toggled.</p>}
      <p>Count: {count}</p> <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />{" "}
      <p>Name: {name}</p> <p>Age: {age}</p>
    </div>
  );
};


export default MediumUseState;