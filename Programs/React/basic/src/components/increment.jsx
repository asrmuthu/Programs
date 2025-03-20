import { useState } from "react";

const Increment = () =>  {
  const [val, setVal] = useState(0);

  const increment = () => {
    setVal(val + 1);
  };

  return (
    <div className="App">
     {val}
      <button onClick={increment}>Add</button>
    </div>
  );
}

export default Increment;
