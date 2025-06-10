import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./Nextpage_impesis1";
import About from "./Nextpage_impesis2";

function NextPage_impesis_Link() {
  return (
    <Router>
      <div className="App">
          <Link to="/home">Home</Link><br />
          <Link to="/about">About</Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NextPage_impesis_Link;
