import React, { useState, useEffect } from "react";

const ProgressBars = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 10);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [progress]);

  return (
    <div
      style={{
        width: `${progress}%`,
        backgroundColor: "green",
      }}
    >
      <p>{progress}%</p>
    </div>
  );
};

export default ProgressBars;
