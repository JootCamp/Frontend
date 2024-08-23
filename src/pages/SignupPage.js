import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const API_BASE_URL = 'http://13.125.19.45:8080';

const SignupPage = () => {
  const [name, setName] = useState(''); // 사용자 이름
  const [email, setEmail] = useState(''); // 이메일
  const [password, setPassword] = useState(''); // 비밀번호
  const [confirmPassword, setConfirmPassword] = useState(''); // 비밀번호 확인
  const [nickname, setNickname] = useState(''); // 닉네임
  const [error, setError] = useState(''); // 오류 메시지
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    const signupData = {
      name,        // 이름
      email,       // 이메일
      password,    // 비밀번호
      nickname,    // 닉네임
    };

    fetch(`${API_BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('회원가입 요청이 실패했습니다.');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          navigate('/login'); // 회원가입 성공 시 로그인 페이지로 이동
        } else {
          setError('회원가입에 실패했습니다. 다시 시도해 주세요.');
        }
      })
      .catch(error => {
        console.error('Error signing up:', error);
        setError('서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.');
      });
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSignup} className="signup-form">
        {error && <p className="error-message">{error}</p>} {/* 오류 메시지 표시 */}
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="signup-button">회원가입</button>
      </form>
    </div>
  );
};

export default SignupPage;
