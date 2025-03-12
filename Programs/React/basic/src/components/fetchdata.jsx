import React, { useEffect, useState } from "react";
import axios from 'axios'

const Fetchdata = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      try {
        // const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        // setUser(response.data)
        // console.log(response.data)
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        setUser(await response.json())   
      } catch (err) {
        console.log("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, []);

  return (
    <div>
      <p>DATAS</p>
      {loading ? (
        "Loading..."
      ) : (
        <ol>
          {user.map((item) => (
            <li key={item.id}>{item.name}</li> // ✅ Use `item.id` as key
          ))}
        </ol>
      )}
    </div>
  );
};

export default Fetchdata;
