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

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 onClick={() => navigate('/')}>Jootcamp</h1>
        <nav className="nav">
          <ul>
            <li><button onClick={() => navigate('/freeboard')}>자유게시판</button></li>
            <li><button onClick={() => navigate('/mypaths')}>My Paths</button></li>
            <li><button onClick={() => navigate('/mytracks')}>My Tracks</button></li>
            <li><button onClick={() => navigate('/myactivities')}>My Activities</button></li>
            <li><button onClick={() => navigate('/teams')}>Teams</button></li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <button className="info-button" onClick={handleProfile}>
          {user ? '내 정보' : 'Login'}
        </button>
        {!user && (
          <button className="signup-button" onClick={handleSignup}>
            회원가입
          </button>
        )}
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
