import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Header.css';

const Header = () => {
  const [user, setUser] = useState(null); // 로그인 상태를 관리할 state
  const navigate = useNavigate();

  useEffect(() => {
    // 디버그: 컴포넌트가 마운트될 때 실행됨
    console.log('Header 컴포넌트 마운트됨');

    const sessionId = Cookies.get('JSESSIONID'); // 쿠키에서 JSESSIONID 가져오기
    console.log('세션 ID 확인:', sessionId); // 세션 ID 확인 로그

    if (sessionId) {
      setUser({ sessionId });
      console.log('로그인 상태로 설정됨:', { sessionId }); // 로그인 상태 설정 로그
    } else {
      setUser(null);
      console.log('로그아웃 상태로 설정됨'); // 로그아웃 상태 설정 로그
    }
  }, []); // 컴포넌트 마운트 시 한 번 실행

  const handleLogout = () => {
    console.log('로그아웃 버튼 클릭됨'); // 디버그: 로그아웃 버튼 클릭 로그
    Cookies.remove('JSESSIONID'); // 쿠키에서 세션 ID 삭제
    setUser(null); // 로그아웃 시 user 상태를 null로 설정
    navigate('/'); // 로그아웃 후 메인 페이지로 이동
    console.log('로그아웃 처리 완료, 메인 페이지로 이동'); // 로그아웃 처리 완료 로그
  };

  const handleProfile = () => {
    console.log('내 정보/로그인 버튼 클릭됨, 현재 user 상태:', user); // 디버그: 버튼 클릭 로그
    if (user) {
      navigate('/profile');
      console.log('프로필 페이지로 이동'); // 프로필 페이지 이동 로그
    } else {
      navigate('/login');
      console.log('로그인 페이지로 이동'); // 로그인 페이지 이동 로그
    }
  };

  const handleSignup = () => {
    console.log('회원가입 버튼 클릭됨'); // 디버그: 회원가입 버튼 클릭 로그
    navigate('/signup');
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 onClick={() => {
          console.log('Jootcamp 로고 클릭됨'); // 디버그: 로고 클릭 로그
          navigate('/');
        }}>Jootcamp</h1>
        <nav className="nav">
          <ul>
            <li><button onClick={() => {
              console.log('자유게시판 버튼 클릭됨'); // 디버그: 자유게시판 버튼 클릭 로그
              navigate('/freeboard');
            }}>자유게시판</button></li>
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
      <div>현재 user 상태: {JSON.stringify(user)}</div> {/* 디버그: 현재 user 상태 출력 */}
    </header>
  );
};

export default Header;
