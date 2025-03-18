import React from 'react'
import useCustomAPI from './useCustomAPI'

export const CallAPI2 = () => {

    const {data, loading, error} = useCustomAPI("https://jsonplaceholder.typicode.com/users") 

    if (loading) return <p>loading...</p>
    if(error) return <p>{error}</p>

  return (
    <div><h1>CallAPI2</h1>
        {data.map((item) => (
            <p key={item.id}>{item.name}</p>
        ))}
    </div>
  )
}
