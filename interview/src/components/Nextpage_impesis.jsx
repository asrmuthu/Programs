import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nextpage_impesis1 from './Nextpage_impesis1';
import Nextpage_impesis2 from './Nextpage_impesis2';

const Nextpage_impesis = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nextpage_impesis1 />} />
                <Route path="/next" element={<Nextpage_impesis2 />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Nextpage_impesis