import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    // 회원가입 로직 추가 (예: API 호출)
    console.log('회원가입:', { username, email, password });
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSignup} className="signup-form">
        <input
          type="text"
          placeholder="사용자 이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
