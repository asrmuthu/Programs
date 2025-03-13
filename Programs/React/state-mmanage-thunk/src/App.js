import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Posts from "./Posts";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Thunk Example</h1>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
