import React from 'react'
import { useState } from 'react'

const Photon = () => {

 const [data, setData] = useState([
    {name:"John",score:82},
    {name:"Doe",score:64},
    {name:"Bob",score:94},
    {name:"Will",score:77},
    {name:"Smith",score:86},
    {name:"Jen",score:54}
    ]);



    const filterName = data.filter((userss, index) => userss.score > 80)


  return (
    <div>App
      <ol>
      {filterName.map((users, index) => (
        <li key={index}>{users.name}{users.score}</li>
      ))}
      </ol>
    </div>
  )
}

export default Photon