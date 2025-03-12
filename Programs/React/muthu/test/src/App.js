import logo from './logo.svg';
import './App.css';
import Increment from './Components/usestate/Increment';
import Hide_Show from './Components/usestate/Hide_Show';
import Timer from './Components/usestate/Timer';
import Todo from './Components/usestate/Todo'

function App() {
  return (
    <div className="App">
      {/* <Increment /> */}
      {/* <Hide_Show /> */}
      {/* <Timer /> */}

      <Todo />
    </div>
  );
}

export default App;
