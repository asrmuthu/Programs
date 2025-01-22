import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "antd";
import {columns} from "./UPSCCMS.js";
import pdf1_1 from "../pdf/army/clerk/clerk2018.pdf";
import pdf1_2 from "../pdf/army/clerk/clerk2019.pdf";
import pdf2_1 from "../pdf/army/gd/gd2018.pdf";
import pdf2_2 from "../pdf/army/gd/gd2019.pdf";
import pdf2_3 from "../pdf/army/gd/gd2020.pdf";
import pdf2_4 from "../pdf/army/gd/gd2021.pdf";
import pdf2_5 from "../pdf/army/gd/gd2023.pdf";
import pdf3_1 from "../pdf/army/nursing/army_nursing_2019.pdf";
import pdf3_2 from "../pdf/army/nursing/army_nursing_2023.pdf";
import pdf4_1 from "../pdf/army/technical/technical2018.pdf";
import pdf4_2 from "../pdf/army/technical/technical2019.pdf";


function Army() {
  const dataSource = [
    {
      key: "1",
      name: "Clerk",
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
      name: "Clerk",
      year: "2019",
      batch: "1",
      address: (
        <a href={pdf1_2} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
  ];


  const dataSource1 = [
    {
      key: "1",
      name: "General Duty",
      year: "2018",
      batch: "1",
      address: (
        <a href={pdf2_1} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "2",
      name: "General Duty",
      year: "2019",
      batch: "1",
      address: (
        <a href={pdf2_2} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "3",
      name: "General Duty",
      year: "2020",
      batch: "1",
      address: (
        <a href={pdf2_3} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "4",
      name: "General Duty",
      year: "2021",
      batch: "1",
      address: (
        <a href={pdf2_4} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "5",
      name: "General Duty",
      year: "2023",
      batch: "1",
      address: (
        <a href={pdf2_5} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
  ];

  const dataSource2 = [
    {
      key: "1",
      name: "Nursing",
      year: "2019",
      batch: "1",
      address: (
        <a href={pdf3_1} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "2",
      name: "Nursing",
      year: "2023",
      batch: "1",
      address: (
        <a href={pdf3_2} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
  ];

  const dataSource3 = [
    {
      key: "1",
      name: "Technical",
      year: "2018",
      batch: "1",
      address: (
        <a href={pdf4_1} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
      key: "2",
      name: "Technical",
      year: "2019",
      batch: "1",
      address: (
        <a href={pdf4_2} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
  ];


  return (
    <>
      <h1>Indian Army Previous Year Questions and Answers</h1>
      <div>
        <h2>Clerk Previous Year Question Papers</h2>
        <Table dataSource={dataSource} columns={columns} />
        <h2>General Duty Previous Year Question Papers</h2>
        <Table dataSource={dataSource1} columns={columns} />
        <h2>Nursing Previous Year Question Papers</h2>
        <Table dataSource={dataSource2} columns={columns} />
        <h2>Technical Previous Year Question Papers</h2>
        <Table dataSource={dataSource3} columns={columns} />
      </div>
      <div style={{ textAlign: "right", marginRight: "160px" }}>
        <Link to="/">
         <Button type="primary">BACK</Button>
        </Link>
      </div>
    </>
  );
}

export default Army;