import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/LoginPage.css';
import { API_BASE_URL } from '../config';

const LoginPage = ({ setUser }) => {
  // 이메일과 비밀번호를 입력받기 위한 상태 변수
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 에러 메시지를 저장하기 위한 상태 변수
  const [error, setError] = useState('');
  // 페이지 이동을 위한 navigate 함수
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    const loginData = { email, password };
  
    // 서버에 로그인 요청
    fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
      credentials: 'include', // 쿠키 포함
    })
      .then(response => {
        if (response.ok) {
          return response.json(); // 로그인 성공 시 JSON 응답을 처리
        } else {
          setError('로그인에 실패했습니다. 다시 시도해 주세요.');
          throw new Error('Login failed');
        }
      })
      .then(data => {
        if (data) {
          setUser(data); // 유저 정보를 설정
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
        {error && <p className="error-message">{error}</p>} {/* 에러 메시지 표시 */}
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // 이메일 입력 시 상태 업데이트
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력 시 상태 업데이트
          required
        />
        <button type="submit">로그인</button> {/* 로그인 버튼 */}
      </form>
    </div>
  );
};

export default LoginPage;
