import React from "react";
import { Link } from 'react-router-dom';
import { Table } from "antd";
import constable1 from "../pdf/ssc/constable/2021_shift1.pdf"
import constable2 from "../pdf/ssc/constable/2021_shift2.pdf"
import constable3 from "../pdf/ssc/constable/2021_shift3.pdf"
import constable4 from "../pdf/ssc/constable/2021_shift4.pdf"
import si_2018_1 from "../pdf/ssc/si/ssc_si_2018_batch1.pdf"
import si_2018_2 from "../pdf/ssc/si/ssc_si_2018_batch2.pdf"
import si_2018_3 from "../pdf/ssc/si/ssc_si_2018_batch3.pdf"
import si_2018_4 from "../pdf/ssc/si/ssc_si_2018_batch4.pdf"
import si_2020_1 from "../pdf/ssc/si/ssc_si_2020_batch1.pdf"
import si_2020_2 from "../pdf/ssc/si/ssc_si_2020_batch2.pdf"
import si_2020_3 from "../pdf/ssc/si/ssc_si_2020_batch3.pdf"
import si_2020_4 from "../pdf/ssc/si/ssc_si_2020_batch4.pdf"
import si_2020_5 from "../pdf/ssc/si/ssc_si_2020_batch5.pdf"
import si_2020_6 from "../pdf/ssc/si/ssc_si_2020_batch6.pdf"


function SSC() {
  const dataSource = [
    {
      key: "1",
      name: "Constable",
      year:"2021",
      batch:"1",
      address: (
        <a href={constable1} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "2",
      name: "Constable",
      year:"2021",
      batch:"2",
      address: (
        <a href={constable2} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "3",
      name: "Constable",
      year:"2021",
      batch:"3",
      address: (
        <a href={constable3} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "4",
      name: "Constable",
      year:"2021",
      batch:"4",
      address: (
        <a href={constable4} target="_blank">
          Download
        </a>
      ),
    },
  ];

  const columns = [
    {
      title: "DEPT",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "YEAR",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Batch",
      dataIndex: "batch",
      key: "batch",
    },
    {
      title: "LINK",
      dataIndex: "address",
      key: "address",
    },
  ];

  const dataSource1 = [
    {
      key: "1",
      name: "Sub-Inspector",
      year:"2018",
      batch:"1",
      address: (
        <a href={si_2018_1} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "2",
      name: "Sub-Inspector",
      year:"2018",
      batch:"2",
      address: (
        <a href={si_2018_2} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "3",
      name: "Sub-Inspector",
      year:"2018",
      batch:"3",
      address: (
        <a href={si_2018_3} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "4",
      name: "Sub-Inspector",
      year:"2018",
      batch:"4",
      address: (
        <a href={si_2018_4} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "5",
      name: "Sub-Inspector",
      year:"2020",
      batch:"1",
      address: (
        <a href={si_2020_1} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "6",
      name: "Sub-Inspector",
      year:"2020",
      batch:"2",
      address: (
        <a href={si_2020_2} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "7",
      name: "Sub-Inspector",
      year:"2020",
      batch:"3",
      address: (
        <a href={si_2020_3} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "8",
      name: "Sub-Inspector",
      year:"2020",
      batch:"4",
      address: (
        <a href={si_2020_4} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "9",
      name: "Sub-Inspector",
      year:"2020",
      batch:"5",
      address: (
        <a href={si_2020_5} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "10",
      name: "Sub-Inspector",
      year:"2020",
      batch:"6",
      address: (
        <a href={si_2020_6} target="_blank">
          Download
        </a>
      ),
    },
  ];

  const columns1 = [
    {
      title: "DEPT",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "YEAR",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Batch",
      dataIndex: "batch",
      key: "batch",
    },
    {
      title: "LINK",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <h1>SSC - Staff Selection Commission Question and Answers</h1>
      <div>
      <h2>Constable Previous Year Question Papers</h2>
      <Table dataSource={dataSource} columns={columns} />
      <h2>Sub-Inspector Previous Year Question Papers</h2>
      <Table dataSource={dataSource1} columns={columns1} />
      </div>
    </>
  );
}

export default SSC;
