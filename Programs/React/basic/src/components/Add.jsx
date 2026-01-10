import React, { useState } from 'react';

const Add = () => {
  const [item, setItem] = useState(1);

  const handleAdd = () => {
    setItem((preV) => preV + 1);
  };

  return (
    <div>
      <p>{item}</p>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Add;