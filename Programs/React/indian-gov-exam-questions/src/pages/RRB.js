import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "antd";
import {columns} from "./UPSCCMS.js";
import pdf1_1 from "../pdf/rrb/alp/rrb_alp_2018_shift1.pdf";
import pdf1_2 from "../pdf/rrb/alp/rrb_alp_2018_shift2.pdf";
import pdf1_3 from "../pdf/rrb/alp/rrb_alp_2018_shift3.pdf";
import pdf1_4 from "../pdf/rrb/alp/rrb_alp_2018_shift4.pdf";
import pdf1_5 from "../pdf/rrb/alp/rrb_alp_2018_shift5.pdf";
import pdf2_1 from "../pdf/rrb/ntpc/ntpc_2017_1.pdf";
import pdf2_2 from "../pdf/rrb/ntpc/ntpc_2017_2.pdf";
import pdf2_3 from "../pdf/rrb/ntpc/ntpc_2017_3.pdf";
import pdf2_4 from "../pdf/rrb/ntpc/ntpc_2021_1.pdf";
import pdf2_5 from "../pdf/rrb/ntpc/ntpc_2021_2.pdf";
import pdf2_6 from "../pdf/rrb/ntpc/ntpc_2021_3.pdf";
import pdf2_7 from "../pdf/rrb/ntpc/ntpc_2021_4.pdf";
import pdf2_8 from "../pdf/rrb/ntpc/ntpc_2021_5.pdf";

function RRB() {
  const dataSource = [
    {
      key: "1",
      name: "ALP",
      year: "2018",
      batch: "1",
      address: (
        <a href={pdf1_1} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "2",
      name: "ALP",
      year: "2018",
      batch: "2",
      address: (
        <a href={pdf1_2} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "3",
      name: "ALP",
      year: "2018",
      batch: "3",
      address: (
        <a href={pdf1_3} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "4",
      name: "ALP",
      year: "2018",
      batch: "4",
      address: (
        <a href={pdf1_4} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "5",
      name: "ALP",
      year: "2018",
      batch: "5",
      address: (
        <a href={pdf1_5} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
  ];

  const dataSource1 = [
    {
      key: "1",
      name: "NTPC",
      year: "2021",
      batch: "1",
      address: (
        <a href={pdf2_1} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "2",
      name: "NTPC",
      year: "2021",
      batch: "2",
      address: (
        <a href={pdf2_2} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "3",
      name: "NTPC",
      year: "2021",
      batch: "3",
      address: (
        <a href={pdf2_3} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "4",
      name: "NTPC",
      year: "2021",
      batch: "4",
      address: (
        <a href={pdf2_4} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "5",
      name: "NTPC",
      year: "2021",
      batch: "5",
      address: (
        <a href={pdf2_5} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "6",
      name: "NTPC",
      year: "2017",
      batch: "1",
      address: (
        <a href={pdf2_6} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "7",
      name: "NTPC",
      year: "2017",
      batch: "2",
      address: (
        <a href={pdf2_7} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "8",
      name: "NTPC",
      year: "2017",
      batch: "3",
      address: (
        <a href={pdf2_8} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
  ];
  
  return (
    <>
      <h1>RRB - Indian Railway Questions and Answers</h1>
      <div>
        <h2>ALP Previous Year Question Papers</h2>
        <Table dataSource={dataSource} columns={columns} />
        <h2>NTPC Previous Year Question Papers</h2>
        <Table dataSource={dataSource1} columns={columns} />
      </div>
      <div style={{ textAlign: "right", marginRight: "160px" }}>
        <Link to="/">
         <Button type="primary">BACK</Button>
        </Link>
      </div>
    </>
  );
}

export default RRB;
