import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Header.css';

const Header = () => {
  const [user, setUser] = useState(null); // 로그인 상태를 관리할 state
  const navigate = useNavigate();

  useEffect(() => {
    // 디버깅: document.cookie를 출력하여 브라우저의 모든 쿠키를 확인
    console.log('Document cookie:', document.cookie);

    // 쿠키 전체를 가져옴
    const allCookies = Cookies.get(); // 모든 쿠키를 가져옴 (객체 형태로 반환됨)
    console.log('쿠키들:', allCookies); // 디버깅용

    if (Object.keys(allCookies).length > 0) {
      // 쿠키가 하나라도 있으면 로그인된 상태로 간주
      setUser({ sessionId: allCookies[Object.keys(allCookies)[0]] }); // 첫 번째 쿠키 값을 사용
      console.log('User logged in with session ID:', allCookies[Object.keys(allCookies)[0]]);
    } else {
      setUser(null);
      console.log('No session found, user not logged in');
    }
  }, []);

  const handleLogout = () => {
    // 모든 쿠키 삭제
    Object.keys(Cookies.get()).forEach((key) => Cookies.remove(key));
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
