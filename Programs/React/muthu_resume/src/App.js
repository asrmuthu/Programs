import "./App.css";
import Details from "./components/Details";
import Header from "./components/Header";
import useWindowSize from './components/useWindowSize';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

function App() {
  const { width } = useWindowSize();
  return (
    <div className="App">
       {width < 768 ? <FaMobileAlt />
                : width < 992 ? <FaTabletAlt />
                    : <FaLaptop />}
      <div className="App-container" style={{ display: width < 992 ? 'block' : 'flex' }}>
        <Header />
        <div style={{ overflowY: 'scroll', height: 'calc(100vh - 60px)'}}>
          <Details />
        </div>
      </div>
    </div>
  );
}

export default App;
