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

    fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
      credentials: 'include', // 쿠키를 포함하여 요청
    })
      .then(response => {
        if (response.ok) {
          const sessionId = Cookies.get('sessionId');
          if (sessionId) {
            setUser({ sessionId }); // 로그인된 사용자 정보 설정
          }
          navigate('/'); // 메인 페이지로 이동
        } else {
          setError('로그인에 실패했습니다. 다시 시도해 주세요.');
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
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
