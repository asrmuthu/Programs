import React, { useState } from 'react'

const Synechron1 = () => {
    const [val1, setVal1] = useState('')
    const [val2, setVal2] = useState('')
    const [users, setUsers] = useState([
        { id: 1, name: "A", job: "software" },
        { id: 2, name: "B", job: "doctor" },
        { id: 3, name: "C", job: "unknown" },
      ]);

const handleAdd = () => {
const exitUser = users.some(aa => aa.name === val1)
if(!exitUser){
  setUsers([...users,{id: users.length + 1, name: val1, job: val2}] )
}else{
    alert('already exit')
}

}

  return (
    <div>
        <input type='text'onChange={(e) => setVal1(e.target.value)}/>
        <input type='text'onChange={(e) => setVal2(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
      <ul>
        {users.map((user, id) => (
          <li key={id}>
            {user.name} - {user.job}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Synechron1