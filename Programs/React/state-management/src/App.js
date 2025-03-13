import React from "react";
import Counter from "./Counter";
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <h1>Redux Counter App</h1>
      <Counter />
    </div>
    </Provider>
  );
};

export default App;
