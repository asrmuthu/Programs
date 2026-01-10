import React, { useState } from 'react';

const DoubletheValueIncrease = () => {
  const [item, setItem] = useState(1);

  const handleAdd = () => {
    setItem((preV) => preV + item);
  };

  return (
    <div>
      <p>{item}</p>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default DoubletheValueIncrease;
