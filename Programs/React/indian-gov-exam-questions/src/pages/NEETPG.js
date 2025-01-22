import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "antd";
import {columns} from "./UPSCCMS.js";
import pdf1_1 from "../pdf/neetpg/NEET-PG-2023-Question-Paper-With-Solutions.pdf";
import pdf1_2 from "../pdf/neetpg/NEET-PG-2022-Question-Paper-With-Solutions.pdf";
import pdf1_3 from "../pdf/neetpg/2021.pdf";
import pdf1_4 from "../pdf/neetpg/NEET-PG-2020-Question-Paper-With-Solutions.pdf";
import pdf1_5 from "../pdf/neetpg/NEET-PG-2019-Question-Paper-With-Solutions.pdf";

function NEETPG() {
  const dataSource = [
    {
      key: "1",
      name: "NEET PG",
      year: "2023",
      batch: "1",
      address: (
        <a href={pdf1_1} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "2",
      name: "NEET PG",
      year: "2022",
      batch: "1",
      address: (
        <a href={pdf1_2} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "3",
      name: "NEET PG",
      year: "2021",
      batch: "1",
      address: (
        <a href={pdf1_3} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "4",
      name: "NEET PG",
      year: "2020",
      batch: "1",
      address: (
        <a href={pdf1_4} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "5",
      name: "NEET PG",
      year: "2019",
      batch: "1",
      address: (
        <a href={pdf1_5} target="_blank">
          Download
        </a>
      ),
    },
  ];

  return (
    <>
      <h1>Neet PG Previous Year Question Papers</h1>
      <div>
        <h2>Neet PG Previous Year Question Papers</h2>
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

export default NEETPG;
