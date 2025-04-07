import React, { useState } from 'react';

const Hide_Show = () => {
  // State to control the visibility of the content
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Add'}
      </button>

    
      {isVisible && (
        <div>
          <p>This content is visible now!</p>
        </div>
      )}
    </div>
  );
};

export default Hide_Show;
