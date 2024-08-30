import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './LoginPage.css';

const API_BASE_URL = 'http://13.125.19.45:8080';

const LoginPage = ({ setUser }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    console.log('로그인 시도:', loginData); // 디버그: 로그인 시도 시의 데이터 출력

    fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
      credentials: 'include', // 쿠키를 포함하여 요청
    })
      .then(response => {
        console.log('서버 응답 상태 코드:', response.status); // 디버그: 서버 응답 코드 확인
        if (response.ok) {
          // 로그인 성공 시, 쿠키에서 세션 ID를 가져와서 setUser 호출
          const sessionId = Cookies.get('sessionId');
          console.log('세션 ID 확인:', sessionId); // 디버그: 쿠키에서 세션 ID 출력
          if (sessionId) {
            setUser({ sessionId }); // 로그인된 사용자 정보 설정
            console.log('User state 설정 완료:', { sessionId }); // 디버그: setUser 호출 후
          }
          navigate('/'); // 메인 페이지로 이동
        } else {
          setError('로그인에 실패했습니다. 다시 시도해 주세요.');
          console.error('로그인 실패: 서버 응답이 올바르지 않습니다.'); // 디버그: 로그인 실패 로그
        }
      })
      .catch(error => {
        console.error('로그인 중 오류 발생:', error);
        setError('서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.');
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>로그인</h2>
        {error && <p className="error-message">{error}</p>} {/* 오류 메시지 표시 */}
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;
