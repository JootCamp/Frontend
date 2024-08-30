import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Header.css';

const Header = () => {
  const [user, setUser] = useState(null); // 로그인 상태를 관리할 state
  const navigate = useNavigate();

  useEffect(() => {
    // 디버그: 페이지 로드 시 콘솔에 메시지 출력
    console.log('Header component mounted.');

    const checkLoginStatus = () => {
      // 모든 쿠키를 가져옴
      const allCookies = Cookies.get(); 
      console.log('쿠키 전체:', allCookies); // 모든 쿠키를 디버깅용으로 출력

      // JSESSIONID 쿠키 값 가져오기
      const sessionId = allCookies.JSESSIONID; 
      console.log('세션 ID:', sessionId); // JSESSIONID 값을 디버깅용으로 출력

      if (sessionId) {
        setUser({ sessionId }); 
        console.log('로그인됨. 세션 ID:', sessionId);
      } else {
        setUser(null);
        console.log('로그인되지 않음.');
      }
    };

    // 컴포넌트 마운트 시 로그인 상태 확인
    checkLoginStatus();

    // 로그인 상태가 변경될 때마다 실행 (추가적인 이벤트 리스너)
    window.addEventListener('login', checkLoginStatus);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('login', checkLoginStatus);
      console.log('Header component unmounted.');
    };
  }, []);

  const handleLogout = () => {
    console.log('로그아웃 버튼 클릭됨.');
    // 모든 쿠키 삭제
    Cookies.remove('JSESSIONID'); 
    setUser(null); 
    console.log('로그아웃 완료. 세션 ID 쿠키 삭제됨.');
    navigate('/'); 
  };

  const handleProfile = () => {
    console.log('내 정보 버튼 클릭됨.');
    if (user) {
      console.log('로그인 상태, 프로필 페이지로 이동.');
      navigate('/profile');
    } else {
      console.log('로그인되지 않음, 로그인 페이지로 이동.');
      navigate('/login');
    }
  };

  const handleSignup = () => {
    console.log('회원가입 버튼 클릭됨.');
    navigate('/signup');
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 onClick={() => { console.log('Jootcamp 로고 클릭됨. 메인 페이지로 이동.'); navigate('/'); }}>Jootcamp</h1>
        <nav className="nav">
          <ul>
            <li><button onClick={() => { console.log('자유게시판 버튼 클릭됨.'); navigate('/freeboard'); }}>자유게시판</button></li>
            <li><button onClick={() => { console.log('My Paths 버튼 클릭됨.'); navigate('/mypaths'); }}>My Paths</button></li>
            <li><button onClick={() => { console.log('My Tracks 버튼 클릭됨.'); navigate('/mytracks'); }}>My Tracks</button></li>
            <li><button onClick={() => { console.log('My Activities 버튼 클릭됨.'); navigate('/myactivities'); }}>My Activities</button></li>
            <li><button onClick={() => { console.log('Teams 버튼 클릭됨.'); navigate('/teams'); }}>Teams</button></li>
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
