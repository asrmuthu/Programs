import React from 'react'
import useCustomAPI from './useCustomAPI'

export const CallAPI2 = () => {

    const {data, loading, error} = useCustomAPI("https://jsonplaceholder.typicode.com/users") 

  return (
    <div><h1>CallAPI2</h1>
        {loading && <p>loading...</p>}
        {error && <p>{error}</p>}
        {data.map((item) => (
            <p key={item.id}>{item.name}</p>
        ))}
    </div>
  )
}
