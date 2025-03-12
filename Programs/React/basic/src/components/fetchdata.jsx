import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetchdata = () => {
  const[user, setUser] = useState([])
  const[loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchAPi = async () => {
      setLoading(true)
      try{
        const API = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(API);
        setUser(API.data)
      }
      catch(err){
        console.log('error', err);
      }
      finally{
        setLoading(false)
      }
    }
    fetchAPi()

  }, [])



  return (
    <div>
     <p>DATAS</p>
     {loading ? 'loading...' : <ol>
     {user.map((item, id) =>(
      <li key={id}>{item.name}</li>
     ))}
     </ol>}
     
    </div>
  )
}

export default Fetchdata