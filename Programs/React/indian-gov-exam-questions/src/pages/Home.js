// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
        <h1>Indian Government Question and Answers</h1>
      <ul>
        <li><Link to="/ssc">SSC</Link></li>
        <li><Link to="/rrb">RRB</Link></li>
        <li><Link to="/ibps">IBPS</Link></li>
        <li><Link to="/upsc-cms">UPSC CMS</Link></li>
        <li><Link to="/neet-pg">NEET PG</Link></li>
      </ul>
    </div>
  );
}

export default Home;
