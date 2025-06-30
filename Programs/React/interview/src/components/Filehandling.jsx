// DataDisplay.js
import React from 'react';
import testData from './data.json'; // make sure the file path is correct

function DataDisplay() {
  return (
    <div>
      <ul>
        {testData.map((item) => (
          <li key={item.id}>
            {item.name} - Score: {item.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
