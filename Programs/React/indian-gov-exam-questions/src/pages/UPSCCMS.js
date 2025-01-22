import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "antd";
import pdf1_1 from "../pdf/cms/question/cms_2014_paper_1.pdf";
import pdf1_2 from "../pdf/cms/answer/cmse_2014_Paper1.pdf";
import pdf1_3 from "../pdf/cms/question/cms_2014_paper_2.pdf";
import pdf1_4 from "../pdf/cms/answer/cmse_2014_Paper2.pdf";
import pdf1_5 from "../pdf/cms/question/cms-2016-Paper-I.pdf";
import pdf1_6 from "../pdf/cms/question/cms-2016-Paper-II.pdf";
import pdf1_7 from "../pdf/cms/question/CMS-2017-Paper-I.pdf";
import pdf1_8 from "../pdf/cms/answer/AnsKey_CMSE_2017_Paper_1.pdf";
import pdf1_9 from "../pdf/cms/question/CMS-2017-Paper-II.pdf";
import pdf1_10 from "../pdf/cms/answer/AnsKey_CMSE_2017_Paper_2.pdf";

export const columns = [
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

function UPSCCMS() {
  const dataSource = [
    {
      key: "1",
      name: "UPSC_CMS",
      year: "2014",
      batch: "1",
      address: (
        <a href={pdf1_1} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "2",
      name: "UPSC_CMS_ANSWER",
      year: "2014",
      batch: "1",
      address: (
        <a href={pdf1_2} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "3",
      name: "UPSC_CMS",
      year: "2014",
      batch: "2",
      address: (
        <a href={pdf1_3} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "4",
      name: "UPSC_CMS_ANSWER",
      year: "2014",
      batch: "2",
      address: (
        <a href={pdf1_4} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "5",
      name: "UPSC_CMS",
      year: "2016",
      batch: "1",
      address: (
        <a href={pdf1_5} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "6",
      name: "UPSC_CMS",
      year: "2016",
      batch: "2",
      address: (
        <a href={pdf1_6} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "7",
      name: "UPSC_CMS",
      year: "2017",
      batch: "1",
      address: (
        <a href={pdf1_7} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "8",
      name: "UPSC_CMS_ANSWER",
      year: "2017",
      batch: "1",
      address: (
        <a href={pdf1_8} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "9",
      name: "UPSC_CMS",
      year: "2017",
      batch: "2",
      address: (
        <a href={pdf1_9} target="_blank">
          Download
        </a>
      ),
    },
    {
      key: "10",
      name: "UPSC_CMS_ANSWER",
      year: "2017",
      batch: "2",
      address: (
        <a href={pdf1_10} target="_blank">
          Download
        </a>
      ),
    },
  ];

  return (
    <>
      <h1>Combined Medical Services</h1>
      <div>
        <h2>CMS Previous Year Question Papers</h2>
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

export default UPSCCMS;
