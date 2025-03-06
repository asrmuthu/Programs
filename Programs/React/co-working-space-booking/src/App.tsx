import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";
import Title from "./components/Title";

const App = () => {
  return (
    <Router>
        <Header />
        <Title />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
    </Router>
  );
};

export default App;
