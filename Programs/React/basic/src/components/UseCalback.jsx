import React, { useState, useCallback } from "react";

// ✅ Memoized Child Component
const Child = React.memo(({ onClick }) => {
  console.log("👶 Child Rendered");
  return <button onClick={onClick}>Increment</button>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ✅ Memoize the function to avoid unnecessary re-renders in Child
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("🏠 Parent Rendered");

  return (
    <div>
      <h2>useCallback + React.memo Example</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />

      <p>Count: {count}</p>
      <Child onClick={increment} />
    </div>
  );
};

export default App;
