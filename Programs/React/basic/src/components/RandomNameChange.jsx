import React from 'react';


export const RandomNameChange = () => {
    const Names = ['Doctor', 'Engineer', 'Developer', 'Designer', 'Artist'];
    const int = Math.floor(Math.random() * Names.length);
    const randomName = Names[int];
   
    return (
        <div>
            RandomNameChange
            <p>I am a {randomName}</p>
        </div>
    );
};
export default RandomNameChange;