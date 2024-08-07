import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleProfile = () => {
    if (user) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 onClick={() => navigate('/')}>Zootcamp</h1>
        <nav className="nav">
          <ul>
            <li><a href="#" onClick={() => navigate('/board')}>Explore</a></li>
            <li><a href="#">My Paths</a></li>
            <li><a href="#">My Tracks</a></li>
            <li><a href="#">My Activities</a></li>
            <li><a href="#">Teams</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <button className="info-button" onClick={handleProfile}>
          {user ? '내 정보' : 'Login'}
        </button>
        {user && (
          <button className="login-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
