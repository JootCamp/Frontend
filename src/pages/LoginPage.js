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
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지

    const loginData = { email, password }; // 서버에 전송할 로그인 데이터

    // 서버에 로그인 요청을 보냄
    fetch(`${API_BASE_URL}/login`, {
      method: 'POST', // HTTP 메서드로 POST 사용
      headers: {
        'Content-Type': 'application/json', // JSON 형식으로 데이터 전송
      },
      body: JSON.stringify(loginData), // 로그인 데이터를 JSON으로 변환하여 전송
      credentials: 'include', // 쿠키 포함
    })
      .then(response => {
        if (response.ok) { // 서버가 200 OK 응답을 보낸 경우
          // 로그인 성공 후 사용자 정보를 가져오기 위해 /isLogin 호출
          return fetch(`${API_BASE_URL}/isLogin`, {
            credentials: 'include', // 쿠키 포함
          });
        } else {
          setError('로그인에 실패했습니다. 다시 시도해 주세요.'); // 로그인 실패 시 에러 메시지 설정
          throw new Error('Login failed'); // 에러를 발생시켜 catch 블록으로 이동
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('사용자 정보 가져오기에 실패했습니다.');
        }
        return response.json(); // /isLogin이 JSON 응답을 반환한다고 가정
      })
      .then(data => {
        setUser(data); // 유저 정보를 상태에 설정
        navigate('/'); // 로그인 성공 시 메인 페이지로 이동
      })
      .catch(error => {
        console.error('Error logging in:', error); // 콘솔에 에러 출력
        setError('서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.'); // 서버 오류 발생 시 에러 메시지 설정
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
