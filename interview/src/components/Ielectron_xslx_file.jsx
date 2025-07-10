import React, { useState } from "react";
import * as XLSX from "xlsx";

const Ielectron_xslx_file = () => {
  const [data, setData] = useState([]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const wb = XLSX.read(evt.target.result, { type: "binary" });
      const ws = wb.Sheets[wb.SheetNames[0]];
      setData(XLSX.utils.sheet_to_json(ws, { header: 1 }).slice(0, 10));
    };
    reader.readAsBinaryString(file);
  };

  return (
    <>
      <input type="file" accept=".xlsx, .xls" onChange={handleFile} />
      <table border="1">
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Ielectron_xslx_file;