import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "antd";
import {columns} from "./UPSCCMS.js";
import pdf1_1 from "../pdf/sbi/2022/sbi-clerk-question-paper-2022.pdf";
import pdf1_2 from "../pdf/sbi/2021/sbi-clerk-mains-2021-question-paper.pdf";
import pdf1_3 from "../pdf/sbi/2021/sbi-clerk-prelims-question-paper-2021.pdf";
import pdf1_4 from "../pdf/sbi/2021/sbi-clerk-prelims-question-paper-solution-2021.pdf";
import pdf1_5 from "../pdf/sbi/2020/SBI-Clerk-Mains-2020-Memory-Based-Paper-1.pdf";
import pdf1_6 from "../pdf/sbi/2020/sbi-po-prelims-2020.pdf";
import pdf1_7 from "../pdf/sbi/2020/sbi-po-prelims-2020-solution.pdf";
import pdf1_8 from "../pdf/sbi/2019/sbi-po-mains-2019.pdf";
import pdf1_9 from "../pdf/sbi/2019/sbi-po-mains-2019-solution.pdf";
import pdf1_10 from "../pdf/sbi/2019/sbi-po-prelims-2019.pdf";
import pdf1_11 from "../pdf/sbi/2019/sbi-po-prelims-2019-solution.pdf";
import pdf1_12 from "../pdf/sbi/2018/Mains/SBI-Clerk-Mains-2018.pdf";
import pdf1_13 from "../pdf/sbi/2018/Mains/SBI-Clerk-Mains-2018-Solutions.pdf";
import pdf1_14 from "../pdf/sbi/2018/Prelims/sbi-po-english-2018.pdf";
import pdf1_15 from "../pdf/sbi/2018/Prelims/sbi-po-english-2018-solution.pdf";
import pdf1_16 from "../pdf/sbi/2018/Prelims/sbi-po-quantitative-2018.pdf";
import pdf1_17 from "../pdf/sbi/2018/Prelims/sbi-po-quantitative-2018-solution.pdf";
import pdf1_18 from "../pdf/sbi/2018/Prelims/sbi-po-reasoning-2018.pdf";
import pdf1_19 from "../pdf/sbi/2018/Prelims/sbi-po-reasoning-2018-solution.pdf";
import pdf1_20 from "../pdf/sbi/2016/Mains/SBI-Clerk-Mains-2016.pdf";
import pdf1_21 from "../pdf/sbi/2016/Mains/SBI-Clerk-Mains-2016-Solutions.pdf";
import pdf1_22 from "../pdf/sbi/2016/Prelims/Maths-Memory-Based 2016.pdf";
import pdf1_23 from "../pdf/sbi/2016/Prelims/Maths-Memory-Based-Solutions-2016.pdf";
import pdf1_24 from "../pdf/sbi/2016/Prelims/REASONING.pdf";
import pdf1_25 from "../pdf/sbi/2016/Prelims/REASONING_answer.pdf";



function sbi() {
  const dataSource = [
    {
      key: "1",
      name: "sbi",
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
      name: "Main",
      year: "2021",
      batch: "1",
      address: (
        <a href={pdf1_2} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      ),
    },
    {
        key: "3",
        name: "Prelims",
        year: "-",
        batch: "1",
        address: (
          <a href={pdf1_3} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "4",
        name: "Prelims_Solution",
        year: "-",
        batch: "1",
        address: (
          <a href={pdf1_4} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "5",
        name: "Mains",
        year: "2020",
        batch: "1",
        address: (
          <a href={pdf1_5} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "6",
        name: "Prelims",
        year: "2020",
        batch: "1",
        address: (
          <a href={pdf1_6} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "7",
        name: "Prelims_Solution",
        year: "2020",
        batch: "1",
        address: (
          <a href={pdf1_7} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "8",
        name: "Mains",
        year: "2019",
        batch: "1",
        address: (
          <a href={pdf1_8} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "9",
        name: "Mains_solution",
        year: "2019",
        batch: "1",
        address: (
          <a href={pdf1_9} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "10",
        name: "Prelims",
        year: "2019",
        batch: "1",
        address: (
          <a href={pdf1_10} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "11",
        name: "Prelims_solution",
        year: "2019",
        batch: "1",
        address: (
          <a href={pdf1_11} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "12",
        name: "Mains",
        year: "2018",
        batch: "1",
        address: (
          <a href={pdf1_12} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "13",
        name: "Mains_solution",
        year: "2018",
        batch: "1",
        address: (
          <a href={pdf1_13} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "14",
        name: "Prelims",
        year: "2018",
        batch: "1",
        address: (
          <a href={pdf1_14} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "15",
        name: "Prelims_solution",
        year: "2018",
        batch: "1",
        address: (
          <a href={pdf1_15} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "16",
        name: "Prelims",
        year: "2018",
        batch: "1",
        address: (
          <a href={pdf1_16} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "17",
        name: "Prelims_solution",
        year: "2018",
        batch: "1",
        address: (
          <a href={pdf1_17} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "18",
        name: "Prelims",
        year: "2018",
        batch: "1",
        address: (
          <a href={pdf1_18} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "19",
        name: "Prelims_solution",
        year: "2018",
        batch: "1",
        address: (
          <a href={pdf1_19} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "20",
        name: "Mains",
        year: "2016",
        batch: "1",
        address: (
          <a href={pdf1_20} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "21",
        name: "Mains_solution",
        year: "2016",
        batch: "1",
        address: (
          <a href={pdf1_21} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "22",
        name: "Prelims",
        year: "2016",
        batch: "1",
        address: (
          <a href={pdf1_22} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "23",
        name: "Prelims_solution",
        year: "2016",
        batch: "1",
        address: (
          <a href={pdf1_23} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "24",
        name: "Prelims",
        year: "2016",
        batch: "1",
        address: (
          <a href={pdf1_24} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
      {
        key: "25",
        name: "Prelims_solution",
        year: "2016",
        batch: "1",
        address: (
          <a href={pdf1_25} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        ),
      },
  ];

  return (
    <>
      <h1>State Bank of India</h1>
      <div>
        <h2>Sbi Previous Year Question Paper</h2>
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

export default sbi;