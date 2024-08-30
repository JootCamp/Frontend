import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const API_BASE_URL = 'http://13.125.19.45:8080';

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Header: Checking login status...');
    fetch(`${API_BASE_URL}/isLogin`, {
      method: 'GET',
    })
    .then(response => {
      if (response.ok) {
        console.log('Header: Response OK, assuming user is logged in.');
        return response.json();
      } else {
        console.log('Header: Not logged in.');
        setUser(null);
        return null;
      }
    })
    .then(data => {
      if (data && data.isLoggedIn) {
        console.log('Header: User data:', data.user);
        setUser(data.user); // 서버에서 받은 유저 데이터를 설정합니다.
      } else {
        setUser(null); // 로그인되지 않은 상태로 설정
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
    })
    .then(() => {
      console.log('Header: Logout successful.');
      setUser(null); // 로그아웃 시 user 상태를 null로 설정
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
