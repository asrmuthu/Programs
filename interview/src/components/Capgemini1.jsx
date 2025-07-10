import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const Capgemini1 = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const FetchA = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        // console.log(res.data);
        const result = res.data.products;
        console.log(result);
        setUser(result);
      } catch (err) {
        console.log("error", err);
      }
    };

    FetchA();
  }, []);

  const filterRating = user.filter((product, id) => product.rating > 4 );

  console.log("filterRating", filterRating);

  {
    return (
      <div className="App">
        <h1>API</h1>
        {/* <ol>
          {user.map((users, id) => (
            <li key={id}>{users.title}</li>
          ))}
        </ol> */}

        <ul>
          {filterRating.map((product, id) => (
            <li key={id}>
               {product.rating}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Capgemini1;
