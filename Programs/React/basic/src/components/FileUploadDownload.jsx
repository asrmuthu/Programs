import React from "react";

const FileUploadDownload = () => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      localStorage.setItem("myFile", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const downloadFile = () => {
    const data = localStorage.getItem("myFile");
    const link = document.createElement("a");
    link.href = data;
    link.download = "file";
    link.click();
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} multiple/>
      <button onClick={downloadFile}>Download</button>
    </div>
  );
};

export default FileUploadDownload;
