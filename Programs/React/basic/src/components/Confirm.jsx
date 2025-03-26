import React, { useState } from "react";

const App = () => {
  const [start, setStart] = useState("");

  // Use confirm
  const AddWithConfirm = () => {
    const confirmed = window.confirm("Are you sure you want to add this?");

    if (confirmed) {
      alert("You added: " + start); // If confirmed, show what was added
      setStart(""); // Reset the input field
    } else {
      alert("Action canceled"); // If canceled, show a cancellation message
    }
  };

  // Use prompt (asking for a response)
  const AddWithPrompt = () => {
    const response = window.prompt("What do you want to add?", start);

    if (response) {
      alert("You decided to add: " + response); // Show the value entered in the prompt
      setStart(response); // Set the input field to the response from the prompt
    } else {
      alert("Nothing added."); // If nothing was entered, show a message
    }
  };

  return (
    <div>
      <input
        type="text"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <button onClick={AddWithConfirm}>Add with Confirm</button>
      <button onClick={AddWithPrompt}>Add with Prompt</button>
    </div>
  );
};

export default App;
