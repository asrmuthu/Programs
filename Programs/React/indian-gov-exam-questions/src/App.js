import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SSC from './pages/SSC';
import RRB from './pages/RRB';
import IBPS from './pages/IBPS';
import UPSCCMS from './pages/UPSCCMS';
import NEETPG from './pages/NEETPG';
import About from './pages/About';
import Missing from './pages/Missing';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ssc" element={<SSC />} />
          <Route path="/rrb" element={<RRB />} />
          <Route path="/ibps" element={<IBPS />} />
          <Route path="/upsc-cms" element={<UPSCCMS />} />
          <Route path="/neet-pg" element={<NEETPG />} />
          <Route path='*' element={<Missing />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
