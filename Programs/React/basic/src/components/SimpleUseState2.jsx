import React from 'react';
import { useState } from "react";


const SimpleUseState2 = () => {
    const Namess = ['Doctor', 'Engineer', 'Developer', 'Designer', 'Artist'];
    const [randomName, setRandomName] = useState(Namess[0]); // Initial state
    const int = Math.floor(Math.random() * Namess.length); // Generate a random index
    const randomName1 = Namess[int];
    const changeName = () => {
        setRandomName(randomName1); // Update the state with a random name
    };
    return (
        <div>
            <main>
                <p>I am a {randomName}</p>
                <button onClick={changeName}>Change</button>
            </main>
        </div>
    );
};
export default SimpleUseState2;