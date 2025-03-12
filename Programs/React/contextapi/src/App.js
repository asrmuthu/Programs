// src/App.js
import React from "react";
import Empoyees from "./components/Emmployee"
import UserProvider from "./context/UserContext";
import ParentComponent from "./components/ParentComponent";

const App = () => {
const users = [{
  id: 1,
  name: "muthu",
  role: "dev"
},
{
  id: 2,
  name: "pandi",
  role: "test"
},
{
  id: 3,
  name: "raj",
  role: "lead"
}];

  return (
    <div>
      <Header title={title}/>
      <Empoyees users={users}/>
    </div>
  );
};

export default App;
