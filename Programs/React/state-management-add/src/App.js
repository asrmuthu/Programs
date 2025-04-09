// App.js
import React from 'react';
import Counter1 from './Counter1'; // Import the Counter component
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import the Redux store

const App = () => {
  return (
      <Provider store={store}>  {/* Wrap App with Provider to give access to Redux store */}

    <div>
      <h1>Welcome to the Redux Counter App!</h1>
      <Counter1 />
    </div>
    </Provider>
  );
};

export default App;
