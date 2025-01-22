import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "antd";
import {columns} from "./UPSCCMS.js";
import pdf1_1 from "../pdf/drdo/cse_2022paper1.pdf";
import pdf1_2 from "../pdf/drdo/cse_2022paper2.pdf";
import pdf1_3 from "../pdf/drdo/general_awerness_II.pdf";
import pdf1_4 from "../pdf/drdo/general_english_I.pdf";
import pdf1_5 from "../pdf/drdo/mechnaical_paper1_2019.pdf";
import pdf1_6 from "../pdf/drdo/mechnaical_paper2_2019.pdf";
import pdf1_7 from "../pdf/drdo/cse_2022paper1.pdf";
import pdf1_8 from "../pdf/drdo/numerical_aptitud.pdf";


function drdo() {
  const dataSource = [
    {
      key: "1",
      name: "DRDO",
      year: "2022",
      batch: "1",
      address: (
        <a href={pdf1_1} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "2",
      name: "DRDO",
      year: "2022",
      batch: "2",
      address: (
        <a href={pdf1_2} target="_blank">
          Download
        </a>
      ),
    },
    {
        key: "3",
        name: "DRDO",
        year: "-",
        batch: "1",
        address: (
          <a href={pdf1_3} target="_blank">
            Download
          </a>
        ),
      },
      {
        key: "4",
        name: "DRDO",
        year: "-",
        batch: "1",
        address: (
          <a href={pdf1_4} target="_blank">
            Download
          </a>
        ),
      },
      {
        key: "5",
        name: "DRDO",
        year: "2019",
        batch: "1",
        address: (
          <a href={pdf1_5} target="_blank">
            Download
          </a>
        ),
      },
      {
        key: "6",
        name: "DRDO",
        year: "2019",
        batch: "2",
        address: (
          <a href={pdf1_6} target="_blank">
            Download
          </a>
        ),
      },
      {
        key: "7",
        name: "DRDO",
        year: "-",
        batch: "1",
        address: (
          <a href={pdf1_7} target="_blank">
            Download
          </a>
        ),
      },
      {
        key: "8",
        name: "DRDO",
        year: "-",
        batch: "1",
        address: (
          <a href={pdf1_8} target="_blank">
            Download
          </a>
        ),
      },
  ];

  return (
    <>
      <h1>Defence Research and Development Organisation</h1>
      <div>
        <h2>DRDO Previous Year Question Papers and Answers</h2>
        <Table dataSource={dataSource} columns={columns} />
      </div>
      <div style={{ textAlign: "right", marginRight: "160px" }}>
        <Link to="/">
         <Button type="primary">BACK</Button>
        </Link>
      </div>
    </>
  );
}

export default drdo;