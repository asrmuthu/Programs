import React, { useState } from 'react';

const Altrimetrik_accotion = () => {
  const [findex, setFindex] = useState(null);
  const data = [
    { title: 'Heading 1', content: 'aaaaaaa' },
    { title: 'Heading 2', content: 'bbbbbb' },
    { title: 'Heading 3', content: 'cccccc' },
  ];

  const handleClick = (index) => {
    setFindex(findex === index ? null : index);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => handleClick(index)} style={{ cursor: 'pointer' }}>
            {item.title}
          </h3>
          {findex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Altrimetrik_accotion;
