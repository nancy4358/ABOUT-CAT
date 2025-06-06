import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
    console.log("Menu toggled");
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
 
      <div className="logo-container">
        <Logo />
      </div>

  
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

  
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>首頁</Link></li>
        <li><Link to="/breeds" onClick={closeMenu}>貓咪品種</Link></li>
        <li><Link to="/articles" onClick={closeMenu}>文章導覽</Link></li>
        <li><Link to="/faq" onClick={closeMenu}>常見問題</Link></li>
        <li><Link to="/about" onClick={closeMenu}>關於我們</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
