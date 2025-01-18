import React from 'react';
import { Link } from 'react-router-dom';
import { Space } from 'antd';

function Header() {
  return (
    <div className='header'>
      <Space>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
      </Space>
    </div>
  );
}

export default Header;
