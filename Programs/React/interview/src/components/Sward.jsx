import React, { useState, useEffect } from "react";

const Sward = () => {
  const [items, setItems] = useState([]);
  const allItems = ["Apple", "Orange", "Banana"];

  useEffect(() => {
    allItems.map((item, index) => {
      setTimeout(() => {
        setItems((prev) => [...prev, item]);
      }, index * 2000); // 2 seconds per item
    });
  }, []);

  //if you use forEach it will continusly

//   useEffect(() => {
//     allItems.forEach((item, index) => {
//       setTimeout(() => {
//         setItems((prev) => [...prev, item]);
//       }, index * 2000); 
//     });
//   }, []);


  return (
    <div>
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default Sward;