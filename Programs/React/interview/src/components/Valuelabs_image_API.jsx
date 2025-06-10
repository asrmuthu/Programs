import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Valuelabs_image_API = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const API = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      console.log(res.data.products);
      setUsers(res.data.products);
    };
    API();
  }, []);
  return (
    <div>
      <table>
        <tbody>
          {users.map((item, id) => (
            <tr key={id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.brand}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.description}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <img src={item.images[0]} width="200" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Valuelabs_image_API;
