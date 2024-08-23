import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Header.css';

const Header = () => {
  const [user, setUser] = useState(null); // 로그인 상태를 관리할 state
  const navigate = useNavigate();

  useEffect(() => {
    // 쿠키에서 세션 ID 또는 토큰을 가져옴
    const sessionId = Cookies.get('sessionId');
    if (sessionId) {
      // 세션 ID가 존재하면 로그인된 상태로 간주
      setUser({ sessionId });
      console.log('User logged in:', sessionId); // 디버그용
    } else {
      setUser(null);
      console.log('No session found, user not logged in'); // 디버그용
    }
  }, []);

  const handleLogout = () => {
    // 쿠키에서 세션 ID 삭제
    Cookies.remove('sessionId'); // 쿠키 이름이 'sessionId'인 경우
    setUser(null); // 로그아웃 시 user 상태를 null로 설정
    navigate('/'); // 로그아웃 후 메인 페이지로 이동
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
