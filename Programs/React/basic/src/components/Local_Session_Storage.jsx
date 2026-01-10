import React, { useState } from "react";

const Local_Session_Storage = () => {
  const [val, setVal] = useState("");

  const getLocal = () => {
    localStorage.setItem("key", val);
    alert("value saved in localstorage");
  };
  const displayLocal = () => {
    const storedVal = localStorage.getItem("key");
    alert("get value " + storedVal);
  };
  const getSession = () => {
    sessionStorage.setItem("session", val);
    alert("value saved in localstorage");
  };
  const displaySession = () => {
    const storedVal = sessionStorage.getItem("session");
    alert("get value " + storedVal);
  };
  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={getLocal}>Get LocalStorage</button>
      <button onClick={displayLocal}>Display LocalStorage</button>
      <button onClick={getSession}>Get Session</button>
      <button onClick={displaySession}>Display Session</button>
    </div>
  );
};

export default Local_Session_Storage;