import React, { useState } from 'react';

const App = () => {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    setResult(Number(val1) + Number(val2));
  };

  const handleMin = () => {
    setResult(Number(val1) - Number(val2));
  };

  return (
    <div>
      <input
        type="number"
        value={val1}
        onChange={(e) => setVal1(e.target.value)}
      />
      <input
        type="number"
        value={val2}
        onChange={(e) => setVal2(e.target.value)}
      />
      <div>
        <button
          onClick={handleAdd}
          style={{ padding: 20, margin: 10, fontSize: 40 }}
        >
          +
        </button>
        <button
          onClick={handleMin}
          style={{ padding: 20, margin: 10, fontSize: 40 }}
        >
          -
        </button>
      </div>
      <h1>{result}</h1>
    </div>
  );
};

export default App;