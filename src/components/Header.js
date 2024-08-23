import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Header.css';

const Header = () => {
  const [user, setUser] = useState(null); // 로그인 상태를 관리할 state
  const navigate = useNavigate();

  useEffect(() => {
    // 올바른 쿠키 이름으로 세션 ID 또는 토큰을 가져옴
    const sessionId = Cookies.get('C8A2BF19A12B56B08B154593B393B878'); // 정확한 쿠키 이름을 사용하세요
    console.log('쿠키에서 가져온 세션 ID:', sessionId); // 디버깅용

    if (sessionId) {
      // 세션 ID가 존재하면 로그인된 상태로 간주
      setUser({ sessionId });
      console.log('User logged in:', sessionId);
    } else {
      setUser(null);
      console.log('No session found, user not logged in');
    }
  }, []);

  const handleLogout = () => {
    // 쿠키에서 세션 ID 삭제
    Cookies.remove('C8A2BF19A12B56B08B154593B393B878'); // 쿠키 이름에 맞춰 제거
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
