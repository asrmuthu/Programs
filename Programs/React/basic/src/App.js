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
import ColorChange from './components/ColorChange';
import Fetchdata from './components/Fetchdata';
import UseMemo from './components/UseMemo';
import Login from './components/Login';
import FileUploadDownload from './components/FileUploadDownload';
import Increment from './components/Increment';
import PromiseAll from './components/PromiseAll';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <FileUploadDownload /> */}
      <PromiseAll />
    </div>
  );
}

export default App;
