import React from 'react';
import { Link } from 'react-router-dom'; 



function Logo() {
  return (
    <div className="logo">
    <Link to='./'>
      <img src="../../logo.png" alt="Logo" style={{width:'150px' }} />
      </Link>
    </div>
  );
}

export default Logo;
