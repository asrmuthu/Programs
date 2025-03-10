import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [val, setVal] = useState("Initial Value");

    return (
        <div>
            <h1>{val}</h1>
            <Child setVal={setVal} />
        </div>
    );
}

export default Parent;