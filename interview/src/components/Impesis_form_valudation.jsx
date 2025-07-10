import React from "react";
import { useState } from "react";

const Impesis_form_valudation = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(" ");
    if (!name | !email | !password) {
      setError("All fields required");
    } else {
      alert("Submit successfully");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Email </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password</label>
      <input
        type="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};
export default Impesis_form_valudation;
