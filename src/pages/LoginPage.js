import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    })
      .then(response => {
        if (response.ok) {
          // 로그인 성공 시 서버로부터 사용자의 정보를 받아와서 상태를 업데이트
          return response.json(); // 서버가 반환하는 유저 정보를 받아옴
        } else {
          setError('로그인에 실패했습니다. 다시 시도해 주세요.');
          throw new Error('Login failed');
        }
      })
      .then(data => {
        if (data) {
          console.log('Login successful:', data);
          setUser(data); // 서버에서 받은 유저 정보를 설정
          navigate('/'); // 메인 페이지로 이동
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
