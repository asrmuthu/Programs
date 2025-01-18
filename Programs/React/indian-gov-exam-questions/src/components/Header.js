// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List } from "antd";


function Header() {
  return (
    <header className="App-header">
    <List>
        <List.Item>
          <Link to="/">Home</Link>
        </List.Item>
        <List.Item>
          <Link to="/about">About</Link>
        </List.Item>
    </List>
    </header>
  );
}

export default Header;
