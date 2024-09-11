import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/SignupPage.css';
import { API_BASE_URL } from '../config';


const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
  
    const signupData = {
      name,
      email,
      password,
      nickname,
    };
  
    fetch(`${API_BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    })
      .then(response => response.json())
      .then(data => {
        if (data === true) { // API 명세서에 따라 true를 성공으로 간주
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
        {error && <p className="error-message">{error}</p>}
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
