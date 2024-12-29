import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Calculator from './components/Calculator';
import RandomNameChange from './components/RandomNameChange';
import Date from './components/Date';
import FunctionCalling from './components/FunctionCalling';
import EventFunction from './components/EventFunction';
import ArrayMap from './components/ArrayMap';
import ArrayMapUsestate from './components/ArrayMapUsestate';
import SimpleUseState from './components/SimpleUseState';
import SimpleUseState2 from './components/SimpleUseState2';
import MediumUseState from './components/MediumUseState';
import Use_effact from './components/Use_effact';

function App() {
  return (
    <div className="App">
      <Alert />
      <Calculator />
      <RandomNameChange />
      <Date />
      <FunctionCalling />
      <EventFunction />
      <ArrayMap />
      <ArrayMapUsestate />
      <SimpleUseState />
      <SimpleUseState2 />
      <MediumUseState />
      <Use_effact />
    </div>
  );
}

export default App;
