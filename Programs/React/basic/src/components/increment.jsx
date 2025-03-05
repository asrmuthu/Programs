import { useState } from "react";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  const increment = () => {
    setVal(Number(val) + 1);
    setIsAdded(true);
  };

  return (
    <div className="App">
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={increment}>Add</button>
      {isAdded && <p>{val}</p>}
    </div>
  );
}
