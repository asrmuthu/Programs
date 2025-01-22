import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "antd";
import {columns} from "./UPSCCMS.js";
import pdf1_1 from "../pdf/ibps/ibps_po/ibps_po_2022_1.pdf";
import pdf1_2 from "../pdf/ibps/ibps_po/ibps_po_2022_2.pdf";
import pdf1_3 from "../pdf/ibps/ibps_po/ibps_po_2022_3.pdf";
import pdf1_4 from "../pdf/ibps/ibps_po/ibps_po_2022_4.pdf";

function IBPS() {
  const dataSource = [
    {
      key: "1",
      name: "IBPS",
      year: "2022",
      batch: "1",
      address: (
        <a href={pdf1_1} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "2",
      name: "IBPS",
      year: "2022",
      batch: "2",
      address: (
        <a href={pdf1_2} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "3",
      name: "IBPS",
      year: "2022",
      batch: "3",
      address: (
        <a href={pdf1_3} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "4",
      name: "IBPS",
      year: "2022",
      batch: "4",
      address: (
        <a href={pdf1_4} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
  ];

  return (
    <>
      <h1>IBPS Previous Year Question Papers</h1>
      <div>
        <h2>IBPS PO Previous Year Question Papers</h2>
        <Table dataSource={dataSource} columns={columns} />
      </div>
      <div style={{ textAlign: "right", marginRight: "160px" }}>
        <Link to="/">
           <Button type="primary">BACK</Button>
        </Link>
      </div>{" "}
    </>
  );
}

export default IBPS;
