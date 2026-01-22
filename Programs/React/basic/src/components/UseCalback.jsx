import React, { useState, useCallback, useEffect, useMemo } from "react";

const Child = React.memo(({ handleAdd }) => {
  console.log("👶 Child Rendered");
  return <button onClick={handleAdd}>Add</button>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleAdd = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  console.log("🏠 Parent Rendered");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Count: {count}</p>
      <Child handleAdd={handleAdd} />
    </div>
  );
};

export default App;
