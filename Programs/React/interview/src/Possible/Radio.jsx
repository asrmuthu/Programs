import React, { useState } from "react";

const Radio = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [submittedAnswer, setSubmittedAnswer] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAnswer = () => {
    setSubmittedAnswer(selectedOption);
  };

  return (
    <div>
      <h1>What is the Capital of India?</h1>
      <div onChange={handleOptionChange}>
        <input type="radio" name="capital" value="Mumbai" />
        <label>Mumbai</label>
        <br />
        <input type="radio" name="capital" value="Chennai" />
        <label>Chennai</label>
        <br />
        <input type="radio" name="capital" value="Delhi" /> <label>Delhi</label>
        <br />
        <input type="radio" name="capital" value="Kochi" /> <label>Kochi</label>
        <br />
      </div>
      <button onClick={handleAnswer}>Answer</button>
      {submittedAnswer && (
        <p>Answer is {submittedAnswer === "Delhi" ? "Correct" : "Incorrect"}</p>
      )}
    </div>
  );
};

export default Radio;
