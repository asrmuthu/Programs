// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from "antd";

function Home() {
  
  const dataSource = [
    {
      key: '1',
      name: 'SSC - Staff Selection Commission',
      address: <Link to="/ssc">Link</Link>,
    },
    {
      key: '2',
      name: 'RRB - Indian Railway',
      address: <Link to="/rrb">Link</Link>,
    },
    {
      key: '3',
      name: 'IBPS',
      address: <Link to="/ibps">Link</Link>,
    },
    {
      key: '4',
      name: 'UPSC CMS',
      address: <Link to="/upsc-cms">Link</Link>,
    },
    {
      key: '5',
      name: 'NEET PG',
      address: <Link to="/neet-pg">Link</Link>,
    },
    {
      key: '6',
      name: 'UPSC All',
      address: <Link to="/neet-pg">Link</Link>,
    },
    {
      key: '7',
      name: 'INDIAN ARMY',
      address: <Link to="/neet-pg">Link</Link>,
    },
    {
      key: '8',
      name: 'DRDO',
      address: <Link to="/neet-pg">Link</Link>,
    },
    {
      key: '9',
      name: 'SBI (State Bank of India )',
      address: <Link to="/neet-pg">Link</Link>,
    },
  ];
  
  const columns = [
    {
      title: 'DEPT',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'LINK',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  

  return (
    <div className='home'>
        <h1>Indian Government Question and Answers</h1>
        <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Home;
