import React, { useState } from 'react';

const CheckBox = () => {
  // State to track checkbox status
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleCheckboxChange} 
        />
      <label>  I agree to the terms and conditions  </label>
       
      
    
      <p>{isChecked ? "You agreed" : "You did not agree"}</p>
    </div>
  );
};

export default CheckBox;
