import React from "react";
import { AdditionProvider } from "./AdditionContext";
import Addition from "./Addition";

const App = () => (
  <AdditionProvider>
    <Addition />
  </AdditionProvider>
);

export default App;
