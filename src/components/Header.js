import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Optional: 쿠키 사용 시
import './Header.css';

const API_BASE_URL = 'http://13.125.19.45:8080';

const Header = () => {
  const [user, setUser] = useState(null); // 로그인 상태를 관리할 state
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인 상태 확인을 위한 API 호출
    fetch(`${API_BASE_URL}/isLogin`, {
      method: 'GET',
      credentials: 'include', // 쿠키를 포함하여 요청
    })
      .then(response => {
        if (response.status === 401) {
          // 401 Unauthorized 상태일 경우 로그인되지 않은 것으로 간주
          setUser(null);
        } else if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to verify login status');
        }
      })
      .then(data => {
        if (data && data.isLoggedIn) {
          setUser(data.user); // 로그인된 사용자 정보 설정
        }
      })
      .catch(error => {
        console.error('Error checking login status:', error);
        setUser(null); // 오류 발생 시에도 로그인되지 않은 상태로 처리
      });
  }, []);

  const handleLogout = () => {
    fetch(`${API_BASE_URL}/logout`, {
      method: 'POST',
      credentials: 'include', // 쿠키를 포함하여 요청
    })
      .then(() => {
        setUser(null); // 로그아웃 시 user 상태를 null로 설정
        navigate('/');
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
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
