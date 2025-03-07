import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import GetAPI_axios from './components/GetAPI_axios';
import GetAPI_Axios_complex from './components/GetAPI_Axios_complex';
import PostAPi_axios from './components/PostAPi_axios';
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
import { Axios } from 'axios';

function App() {
  return (
    <div className="App">
      {/* <Alert /> */}
      {/* <GetAPI_axios /> */}
      <GetAPI_Axios_complex />
      {/* <PostAPi_axios /> */}
      {/* <Calculator />
      <RandomNameChange />
      <Date />
      <FunctionCalling />
      <EventFunction />
      <ArrayMap />
      <ArrayMapUsestate />
      <SimpleUseState />
      <SimpleUseState2 />
      <MediumUseState />
      <Use_effact /> */}
    </div>
  );
}

export default App;
