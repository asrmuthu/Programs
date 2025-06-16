import React, { useState, useEffect } from 'react';

const Debounching = () => {
  const [val, setVal] = useState('');
  const [items, setItems] = useState([]);
  const [debounce, setDebounce] = useState('');


  useEffect(() => {
    const id = setTimeout(() => {
      setDebounce(val);
    }, 500);

    const API = async () => {
      const res = await fetch(
        `https://dummyjson.com/users/search?q=${debounce}`
      );
      const res1 = await res.json();
      console.log(res1.users);
      setItems(res1.users);
    };
    API();
    return () => {
      clearTimeout(id);
    };
  }, [debounce, val]);

  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      {items.map((item, index) => (
        <p key={index}>
          {item.firstName} - {item.lastName}
        </p>
      ))}
    </div>
  );
};

export default Debounching;