import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-2 navbar-dark bg-primary">
      <Link to="/" className="navbar-brand ms-5">
        VOICE ASSIST
      </Link>

      <ul className="navbar-nav ms-auto me-5">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/videos" className="nav-link">
            Videos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/speech-emotion" className="nav-link">
            Emotion Detector
          </NavLink>
        </li>

        <li className="nav-item">
          
          <a href='http://127.0.0.1:4040 ' target="_blank" rel="noopener noreferrer" className='nav-link'>
            Gemini Vision
          </a>
          
        </li>
        <li className="nav-item ms-5">
          <Link
            to={{ pathname: '/search', state: { text: '' } }}
            className="custom-btn btn-sm mt-1"
          >
            <i className="fa fa-search"></i> Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
