import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>BMI Calculator</h2>
      <label htmlFor="height">Height(cm):</label>
      <input type="text" id="height" name="height" className="textbox"/>
    </div>
  );
}

export default App;
