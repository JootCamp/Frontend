import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const API_BASE_URL = 'http://13.125.19.45:8080';

const Header = () => {
  const [user, setUser] = useState(null); // 로그인 상태를 관리할 state
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인 상태 확인
    fetch(`${API_BASE_URL}/isLogin`, {
      credentials: 'include', // 쿠키를 포함하여 요청
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to check login status');
        }
        return response.json();
      })
      .then(data => {
        if (data.isLoggedIn) {
          setUser(data.user); // 로그인된 유저 정보를 state에 저장
        } else {
          setUser(null); // 로그인되지 않은 상태
        }
      })
      .catch(error => console.error('Error checking login status:', error))
      .finally(() => setLoading(false)); // 로딩 상태 해제
  }, []);

  const handleLogout = () => {
    fetch(`${API_BASE_URL}/logout`, {
      method: 'POST',
      credentials: 'include', // 쿠키를 포함하여 요청
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Logout failed');
        }
        setUser(null); // 로그아웃 시 user 상태를 null로 설정
        navigate('/');
      })
      .catch(error => console.error('Error logging out:', error));
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

  if (loading) {
    return <div>Loading...</div>; // 로딩 중에는 간단한 로딩 메시지 표시
  }

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
