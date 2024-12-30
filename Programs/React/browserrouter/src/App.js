import {Routes, Route } from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css'; 
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
