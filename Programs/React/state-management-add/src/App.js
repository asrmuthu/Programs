import React from 'react';
import Counter1 from './Counter1'; 
import { Provider } from 'react-redux'; 
import store from './store';

const App = () => {
  return (
      <Provider store={store}>

    <div>
      <h1>Welcome to the Redux Counter App!</h1>
      <Counter1 />
    </div>
    </Provider>
  );
};

export default App;
