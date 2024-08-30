import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Header.css';

const Header = () => {
  const [user, setUser] = useState(null); // 로그인 상태를 관리할 state
  const navigate = useNavigate();

  // 로그인 상태를 확인하는 useEffect
  useEffect(() => {
    const checkLoginStatus = () => {
      // 쿠키 전체를 가져옴
      const allCookies = Cookies.get(); 
      const sessionId = allCookies.JSESSIONID; // JSESSIONID 쿠키 값을 사용
      
      console.log('쿠키들:', allCookies); // 디버깅용
      console.log('세션 ID:', sessionId); // 디버깅용

      if (sessionId) {
        // 세션 ID가 존재하면 로그인된 상태로 간주
        setUser({ sessionId }); 
        console.log('User logged in with session ID:', sessionId);
      } else {
        setUser(null);
        console.log('No session found, user not logged in');
      }
    };

    checkLoginStatus();

    // 로그인 상태를 실시간으로 반영하기 위해 로그인 시 상태를 체크
    window.addEventListener('login', checkLoginStatus);

    return () => {
      window.removeEventListener('login', checkLoginStatus);
    };
  }, []);

  // 로그아웃 함수
  const handleLogout = () => {
    // 모든 쿠키 삭제
    Cookies.remove('JSESSIONID'); // 세션 쿠키 삭제
    setUser(null); // 로그아웃 시 user 상태를 null로 설정
    navigate('/'); // 로그아웃 후 메인 페이지로 이동
  };

  // 프로필 페이지로 이동 함수
  const handleProfile = () => {
    if (user) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  // 회원가입 페이지로 이동 함수
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
