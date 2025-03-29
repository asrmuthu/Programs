import axios from 'axios'
import { useState, useEffect } from 'react'

const GetAPI_axios = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUser(res.data)
        })
        .catch((err) => {
          console.log("error", err);
        });
    }, [])
    const filteredUsers = user.filter(item => item.id > 5);
  return (
    <div>
      {filteredUsers.map((item, id) => (
        <div key={id}>
          <h2>{item.address.geo.lat}</h2>
        </div>
      ))}
      {/* {user.map((item, id) => (
        <div key={id}>
          <h1>{item.name}</h1>
          <h1>{item.id}</h1>
          <h2>{item.address.street}</h2>
        </div>
      ))} */}
      <ol style={{listStyleType: 'none'}}>
        {user.map((item, id) => (
          <li key={id}>{item.name}</li>
        ))}
      </ol>
    </div>
  )
}

export default GetAPI_axios