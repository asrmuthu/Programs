import React, { useState, useEffect } from 'react'

const MMK = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers)
  }, [])

  const reverseName = id => {
    setUsers(users.map((user, i) =>
      i === id ? { ...user, name: user.name.split('').reverse().join('') } : user
    ))
  }

  return (
    <div>
      <h2>Users</h2>
      <ol>
        {users.map((user, id) => (
          <li
            key={user.id}
            style={{ padding: 20, cursor: 'pointer' }}
            onClick={() => reverseName(id)}
          >
            {user.name} -{' '}
            <span
              onClick={e => e.stopPropagation()}
            >
              {user.email}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default MMK
