import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <nav className="navbar d-flex justify-content-between navbar-dark position-fixed start-0 end-0">
        <div className="ps-5 pt-3">
          <Link to={'/'}
            className={`navbar-brand Li ${selectedItem === 'start' ? 'selected' : ''}`}
            onClick={() => handleItemClick('start')}
          >
            <h2>Start FrameWork</h2>
          </Link>
        </div>
        <div className="w-25">
          <Link to={'/'}
            className={`navbar-brand ${selectedItem === 'about' ? 'selected' : ''}`}
            onClick={() => handleItemClick('about')}
          >
            About
          </Link>
          <Link to={'portfolio'}
            className={`navbar-brand ${selectedItem === 'portfolio' ? 'selected' : ''}`}
            onClick={() => handleItemClick('portfolio')}
          >
            Portfolio
          </Link>
          <Link to={'contact'}
            className={`navbar-brand ${selectedItem === 'contact' ? 'selected' : ''}`}
            onClick={() => handleItemClick('contact')}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
