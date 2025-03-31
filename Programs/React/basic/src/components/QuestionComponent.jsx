import React, { useState } from "react";

const QuestionComponent = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const question = "What is the capital of France?";
  const answers = [
    { id: 1, text: "Berlin" },
    { id: 2, text: "Madrid" },
    { id: 3, text: "Paris" },
    { id: 4, text: "Rome" }
  ];

  const correctAnswerId = 3;

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(parseInt(event.target.value)); // Parse to integer to match answer id
  };

  const handleSubmit = () => {
    setIsAnswered(true);
  };

  const renderFeedback = () => {
    if (selectedAnswer === correctAnswerId) {
      return <p style={{ color: "green" }}>Correct!</p>;
    } else {
      return <p style={{ color: "red" }}>Incorrect. The correct answer is Paris.</p>;
    }
  };

  return (
    <div>
      <h1>{question}</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          {answers.map((answer) => (
            <div key={answer.id}>
              <input
                type="radio"
                id={`answer-${answer.id}`}
                name="answer"
                value={answer.id}
                onChange={handleAnswerSelect}
                checked={selectedAnswer === answer.id}
              />
              <label htmlFor={`answer-${answer.id}`}>{answer.text}</label>
            </div>
          ))}
        </div>
        <button type="button" onClick={handleSubmit} disabled={selectedAnswer === null}>
          Submit
        </button>
      </form>
      {isAnswered && renderFeedback()}
    </div>
  );
};

export default QuestionComponent;
