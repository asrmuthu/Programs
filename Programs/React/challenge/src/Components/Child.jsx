import React from 'react';

const Child = ({ setVal }) => {
    return (
        <>
            <div>Child</div>
            <button onClick={() => setVal("Parent has been updated!")}>
                Change Parent Value
            </button>
        </>
    );
}

export default Child;