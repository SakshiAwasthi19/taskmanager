import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaPlus, FaCheck, FaSun, FaMoon, FaSignInAlt, FaUserPlus, FaUser, FaCrown, FaKeyboard, FaTrashAlt, FaSignOutAlt, FaChartBar } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset, deleteUser } from '../store/authSlice';
import { useTheme } from '../context/ThemeContext';
import AccountModal from './AccountModal';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { theme, toggleTheme } = useTheme();

  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };

  const onDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This will permanently delete all your data and tasks.')) {
      dispatch(deleteUser());
      dispatch(reset());
      navigate('/login');
    }
  };

  const initial = user && user.name ? user.name.charAt(0).toUpperCase() : 'U';

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">TaskManager</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              {user ? (
                <>
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
                      Completed
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link d-flex align-items-center" to="/report">
                      <FaChartBar className="me-2" />
                      Report
                    </Link>
                  </li>

                  <li className="nav-item dropdown ms-3" style={{ position: 'relative' }}>
                    <div
                      className="nav-link d-flex align-items-center"
                      id="navbarDropdown"
                      role="button"
                      onClick={() => setShowDropdown(!showDropdown)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div
                        className="rounded d-flex align-items-center justify-content-center fw-bold"
                        style={{
                          width: '32px',
                          height: '32px',
                          backgroundColor: '#f57c00', // Orange color
                          color: 'white',
                          fontSize: '1rem'
                        }}
                      >
                        {initial}
                      </div>
                    </div>
                    {showDropdown && (
                      <div
                        className="position-fixed top-0 start-0 w-100 h-100"
                        onClick={() => setShowDropdown(false)}
                        style={{ zIndex: 999 }}
                      />
                    )}
                    <ul
                      className={`dropdown-menu dropdown-menu-end ${showDropdown ? 'show' : ''} ${theme === 'dark' ? 'dropdown-menu-dark' : ''}`}
                      aria-labelledby="navbarDropdown"
                      style={{ position: 'absolute', right: 0, zIndex: 1000 }}
                    >
                      <li>
                        <button className="dropdown-item d-flex align-items-center" onClick={() => { setShowAccountModal(true); setShowDropdown(false); }}>
                          <FaUser className="me-2" /> Account
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item d-flex align-items-center" onClick={() => setShowDropdown(false)}>
                          <FaCrown className="me-2" /> Premium
                        </button>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <button className="dropdown-item d-flex align-items-center" onClick={() => { onLogout(); setShowDropdown(false); }}>
                          <FaSignOutAlt className="me-2" /> Logout
                        </button>
                      </li>

                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <button className="dropdown-item d-flex align-items-center text-danger" onClick={() => { onDeleteAccount(); setShowDropdown(false); }}>
                          <FaTrashAlt className="me-2" /> Delete Account
                        </button>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link d-flex align-items-center" to="/login">
                      <FaSignInAlt className="me-2" />
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link d-flex align-items-center" to="/register">
                      <FaUserPlus className="me-2" />
                      Register
                    </Link>
                  </li>
                </>
              )}
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

      {/* Account Modal */}
      {showAccountModal && (
        <AccountModal show={showAccountModal} onClose={() => setShowAccountModal(false)} />
      )}
    </>
  );
}

export default Navbar;