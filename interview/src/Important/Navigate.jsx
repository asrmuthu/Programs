import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigate1 from "./Navigate1";
import Navigate2 from "./Navigate2";

const Navigate = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate1 />} />
        <Route path="/Navigate2" element={<Navigate2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigate;
