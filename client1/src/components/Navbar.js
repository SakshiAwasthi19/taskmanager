import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlus, FaCheck, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">TaskManager</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/">
                <FaHome className="me-2" />
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/add">
                <FaPlus className="me-2" />
                Add Task
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/completed">
                <FaCheck className="me-2" />
                Completed Tasks
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <button
                className={`btn btn-sm ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center`}
                onClick={toggleTheme}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <FaSun className="me-1" /> : <FaMoon className="me-1" />}
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;