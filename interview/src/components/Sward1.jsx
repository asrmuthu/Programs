import React, { useState } from "react";

const Sward1 = () => {
  const input = "muthu pandi raj";
  const [output, setOutput] = useState("");

  const rearrangeWords = () => {
    const rearranged = input
      .split(" ") // Split the input string into words
      .map((word) => word.split("").reverse().join("")) // Reverse each word
      .join(" "); // Join the words back with spaces
    setOutput(rearranged);
  };

  return (
    <div>
      <h1>Word Rearranger</h1>
      <p>{input}</p>
      <button onClick={rearrangeWords}>Button</button>
      <p>{output}</p>
    </div>
  );
};

export default Sward1;