import logo from "./logo.svg";
import "./App.css";
import profile_img from "./profile_img.jpg";

function App() {
  return (
    <div className="App">
      <section>
        <div>
          <img src={profile_img} alt="Muthupandi_Raj" />
          <h1>Muthupandi Raj</h1>
          <h2>Engineering Lead</h2>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Address: 79 South Street, Theni, Tamil Nadu, India, 625523</p>
          <p>Mobile: 7904688429</p>
          <p>
            Email:{" "}
            <a href="mailto:asrmuthu57@gmail.com">asrmuthu57@gmail.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/feed/
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/asrmuthu"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/asrmuthu
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
