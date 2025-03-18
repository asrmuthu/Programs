import { useState, useEffect } from "react";

const FileUploadDownload = () => {
  // State to hold selected files and stored files
  const [files, setFiles] = useState([]);
  const [storedFiles, setStoredFiles] = useState([]);

  // Load stored files from localStorage when component mounts
  useEffect(() => {
    const savedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    setStoredFiles(savedFiles);
  }, []);

  // Handle file selection
  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  // Upload files to localStorage
  const handleUpload = () => {
    if (files.length === 0) {
      alert("Please select at least one file.");
      return;
    }

    // Get already stored files
    const uploadedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];

    // Read each file and store as Base64
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        uploadedFiles.push({
          name: file.name,
          content: event.target.result, // Store as Base64
        });

        // Save updated file list in localStorage
        localStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles));
        setStoredFiles(uploadedFiles); // Update UI
      };
      reader.readAsDataURL(file); // Convert file to Base64
    });

    alert(`${files.length} files uploaded successfully.`);
    setFiles([]); // Clear file selection
  };

  // Handle file download
  const handleDownload = (index) => {
    const fileData = storedFiles[index];
    if (!fileData) return alert("File not found!");

    const link = document.createElement("a");
    link.href = fileData.content;
    link.download = fileData.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle file deletion
  const handleDelete = (index) => {
    const updatedFiles = storedFiles.filter((_, i) => i !== index);
    localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
    setStoredFiles(updatedFiles);
  };

  return (
    <div>
      <h2>Multi File Upload & Download (React + LocalStorage)</h2>

      {/* File Upload */}
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {/* Uploaded Files List */}
      <h3>Uploaded Files:</h3>
      <ul>
        {storedFiles.map((file, index) => (
          <li key={index}>
            {file.name} 
            <button onClick={() => handleDownload(index)}>Download</button>
            <button onClick={() => handleDelete(index)} style={{ marginLeft: "10px", color: "red" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUploadDownload;
