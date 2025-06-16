import React from "react";

const App = () => {
  const handleClick = () => {
    const conf = window.confirm("Can I proceed");
    if (conf) {
      alert("Thank you");
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
