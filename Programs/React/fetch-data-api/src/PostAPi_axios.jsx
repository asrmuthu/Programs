import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostAPI_Axios = () => {
  const [users, setUsers] = useState([]);
  const [val, setVal] = useState("");
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        const maxId = response.data.length ? Math.max(...response.data.map((user) => user.id)) : 0;
        setLastId(maxId);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  const postUser = async () => {
    if (!val.trim()) return alert("Please enter a name");

    try {
      const newId = lastId + 1;
      const newUser = {
        id: newId,
        name: val,
        email: "example@example.com"
      };
      await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
      setUsers([...users, newUser]);
      setLastId(newId);
      setVal("");

      console.log("New User Added:", newUser);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div>
      <h3>Users List</h3>
      <ol style={{ listStyleType: 'none', padding: 0 }}>
        {users.map((user) => (
          <li key={user.id}>{user.id}. {user.name}</li>
        ))}
      </ol>

      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={postUser}>Add</button>
    </div>
  );
};

export default PostAPI_Axios;