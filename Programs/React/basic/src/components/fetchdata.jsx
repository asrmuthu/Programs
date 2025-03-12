import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetchdata = () => {
  const[user, setUser] = useState([])
  const[loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchapi = async () => {
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
fetchapi();

},[])  



  return (
    <div>
     aaaa
    </div>
  )
}

export default Fetchdata