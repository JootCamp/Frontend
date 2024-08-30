import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Header.css';

const API_BASE_URL = 'http://13.125.19.45:8080';

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Header: Checking login status...');
    fetch(`${API_BASE_URL}/isLogin`, {
      method: 'GET',
      credentials: 'include', // 쿠키를 포함하여 요청
    })
    .then(response => {
      if (response.ok) {
        console.log('Header: Response OK, assuming user is logged in.');
        setUser({ loggedIn: true }); // 유저 정보와 관계없이 로그인된 상태로 처리
        return response.json();
      } else {
        console.log('Header: Not logged in.');
        setUser(null);
      }
    })
    .catch(error => {
      console.error('Error checking login status:', error);
      setUser(null);
    });
  }, [setUser]);

  const handleLogout = () => {
    console.log('Header: Logging out...');
    fetch(`${API_BASE_URL}/logout`, {
      method: 'POST',
      credentials: 'include', // 쿠키를 포함하여 요청
    })
    .then(() => {
      console.log('Header: Logout successful.');
      setUser(null);
      navigate('/');
    })
    .catch(error => {
      console.error('Error logging out:', error);
    });
  };

  const handleProfile = () => {
    console.log('Header: Profile button clicked.');
    if (user) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  const handleSignup = () => {
    console.log('Header: Signup button clicked.');
    navigate('/signup');
  };

  console.log('Header: Rendering with user state:', user);

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
        {user ? (
          <>
            <button className="info-button" onClick={handleProfile}>내 정보</button>
            <button className="login-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <button className="info-button" onClick={handleProfile}>Login</button>
            <button className="signup-button" onClick={handleSignup}>회원가입</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
