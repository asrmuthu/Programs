import { useState } from 'react';


const Alert = () =>{
    const [val, setVal] = useState('');
    const click = () => {
        
  const handleAlert = () => {
    // Show the confirmation dialog
    const confirmed = confirm(val);

    if (confirmed) {
      // If the user clicks "OK", show the next alert
      alert("Thank you for confirming!");
    } else {
      // If the user clicks "Cancel", show a different alert
      alert("You canceled the action.");
    }
  };
        setVal('');
    };
    return (
        <div>
            <input value={val} onChange={(e) => setVal(e.target.value)}/>
            <button onClick={click}>Click Me</button>
        </div>
    );
}
export default Alert;
