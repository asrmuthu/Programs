import React, { useState, useEffect } from "react";
import axios from "axios";

const Publisher2 = () => {
  const [users, setUsers] = useState([]);
  const [userHeight, setUserHeight] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/people");
        setUsers(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleUserSelect = (e) => {
    const user = users.find((user) => user.name === e.target.value);
    if (user) {
      setUserHeight(user.height);
    }
  };

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <div>
        <label>Name</label>
        <select onChange={handleUserSelect}>
          <option>Select</option>
          {users.map((user, index) => (
            <option key={index} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>{userHeight}</p>
      </div>

    </div>
  );
};

export default Publisher2;