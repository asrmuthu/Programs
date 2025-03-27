import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const GetAPI_Axios_complex = () => {
const [user, setUser] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
    const fetchData = async () => {
     setLoading(true);
    try{
     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
     setUser(response.data)
     console.log(response.data)
    }
    catch(error){
        console.log("error", error)
    }
    finally{
        setLoading(false); 
    } 
}
fetchData();

},[])  

  return (
    <div>{loading ? "Loading..." : (
        user.map((item, index) => (
            <p key={index}>{item.name}</p>
        ))
    )}</div>
  )
}

export default GetAPI_Axios_complex