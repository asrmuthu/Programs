// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>count {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const API = async () => {
      const res1 = await fetch("https://dummyjson.com/products");
      const res = await res1.json();
      setItems(res.products); // ✅ correct
    };

    API();
  }, []);

  return (
    <div>
      <ol>
        {items.map((item, id) => (
          <li key={id}>{item.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;