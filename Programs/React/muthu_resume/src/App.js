import "./App.css";
import Details from "./components/Details";
import Header from "./components/Header";

function App() {
  return (
    <div className="App app-shell">
      <Header />
      <div className="main-column">
        <Details />
      </div>
    </div>
  );
}

export default App;
