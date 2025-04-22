import React from 'react'
import { BrowserRouter, Link, Routes , Route } from 'react-router-dom'
import Home from '../topic/Home'
import Html from '../topic/Html'
import Css from '../topic/Css'
import JavaScript from '../topic/Js'
import ReactJs from '../topic/React1'
import About from '../topic/About'

const Header = () => {
  return (
    <BrowserRouter>
      <>
      <nav>
        <ol className='Header_ol'>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/Html">HTML</Link></li>
         <li><Link to="/Css">CSS</Link ></li>
         <li><Link to="/Js">Java Script</Link ></li>
         <li><Link to="/React1">React Js</Link ></li>
         <li style={{marginLeft: "auto"}}><Link to="/About">About</Link ></li>
         </ol>
      </nav>
      <Routes>
      {/* <Switch></Switch> */}
        <Route path ="/" element={<Home />} />
        <Route path ="/Html" element={<Html />} />
        <Route path ="/Css" element={<Css />} />
        <Route path ="/Js" element={<JavaScript />} />
        <Route path ="/React1" element={<ReactJs />} />
        <Route path ="/About" element={<About />} />
      </Routes>
      </>
    </BrowserRouter>
  )
}

export default Header