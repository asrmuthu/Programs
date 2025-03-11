import React from 'react'
import { useState } from 'react';

const Hide_Show = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
      //again clicking should need to work
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <div>Hide_Show</div>}
    </div>
  );
};
export default Hide_Show