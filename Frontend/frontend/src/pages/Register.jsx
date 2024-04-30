import React from 'react'
import { useState } from 'react'
import "./index.css"
export default function Register() {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const registerAdmin = (e) => {
        e.preventDefault()
    }

  return (
    <div>
        <form onSubmit={registerAdmin}>
            <label>Username</label>
            <input type='text' placeholder='Enter username' value={data.username} onChange={(e) => setData({...data, username: e.target.value})}/>
            <label>Email</label>
            <input type='email' placeholder='Enter email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
            <label>Password</label>
            <input type='password' placeholder='Enter password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}
