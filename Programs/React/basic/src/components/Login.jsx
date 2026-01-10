import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [val, setVal] = useState("");
  const [pass, setPass] = useState("");

  const handleCick = () => {
    alert("Login SuccessFully");
    setVal(" ");
    setPass(" ");
  };

  return (
    <div>
      User Name
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      Passowrd{" "}
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleCick}>Login</button>
    </div>
  );
};

export default App;