import { useState } from 'react';


const Alert = () =>{
    const [val, setVal] = useState('');
    const click = () => {
        alert(val);
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
