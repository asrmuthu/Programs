import React, { useState } from "react";

const FormValidation = () => {
  const [val, setVal] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!val | !email | !password) {
      setError(" * All fields required");
    } else {
      setError(" ");
      setVal(" ");
      setEmail(" ");
      setPassword("");
      alert("Submit successfully");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <br />
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label>File</label>
      <input type="file" multiple onChange={handleFileChange} />
      <br />
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
