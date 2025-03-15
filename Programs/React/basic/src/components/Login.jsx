import React, { useState } from 'react'

const Login = () => { 
const [email, setEmail] = useState('')
const [pass, setPass] = useState('')
const [message, setMessage] = useState('')

const handleLogin = () =>{
    setMessage('Loading')
    if (email == '1@gamil.com' && pass == '123'){
        
        setTimeout(() => {
            setMessage('Login successfully')
        }, 1000 )
        
    }
    else{
        setTimeout(() => {
            setMessage('Login failed')
        }, 1000 )
    }

}

  return (
    <div>
        <input type='email' placeholder='Enter the Email' onChange={(e) => setEmail(e.target.value)}/><br/>
        <input type='password' placeholder='Enter the Password' onChange={(e) => setPass(e.target.value)}/><br/>
        <button onClick={handleLogin}>Login</button>
        {message !== '' && <p>{message}</p>} 
    </div>
  )
}

export default Login