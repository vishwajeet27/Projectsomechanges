import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  padding: '10px 20px',
  margin: '0 10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

const Navbar = () => {
  return (
    <nav style={{  display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/register" style={linkStyle}>
        Register
      </Link>
      <Link to="/login" style={linkStyle}>
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
