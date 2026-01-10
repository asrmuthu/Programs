import React, { useState, useEffect } from "react";
import axios from "axios";

const ArrayMap = () => {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const products = [
    { id: 1, name: "Laptop", price: 10 },
    { id: 2, name: "Phone", price: 20 },
    { id: 3, name: "Tablet", price: 40 },
  ];

  const filterOption = products.filter((item) => item.price > 20);

  return (
    <div>
      {filterOption.map((item, id) => (
        <p key={id}>{item.name}</p>
      ))}
    </div>
  );
};

export default ArrayMap;
