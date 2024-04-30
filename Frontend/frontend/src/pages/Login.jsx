import React from 'react';
import { useState } from 'react';
import "./styles.css"
export default function Login() {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const loginAdmin = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="container">
      <form onSubmit={loginAdmin}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
