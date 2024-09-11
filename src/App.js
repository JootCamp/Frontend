import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FreeBoard from './pages/FreeBoard';
import NewPost from './pages/NewPost';
import PostDetail from './pages/PostDetail';
import ProfilePage from './pages/ProfilePage';
import Playground from './pages/Playground';
import CreateBoard from './pages/CreateBoard';
import { API_BASE_URL } from './config';

const App = () => {
  const [user, setUser] = useState(null); // 전역으로 로그인 상태 관리
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  useEffect(() => {
    // 애플리케이션이 로드될 때 로그인 상태 확인
    fetch(`${API_BASE_URL}/isLogin`, {
      credentials: 'include', // 쿠키 포함
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('로그인 상태 확인에 실패했습니다.');
        }
        return response.text(); // /isLogin이 문자열을 반환한다고 가정
      })
      .then(data => {
        if (data) {
          try {
            const userData = JSON.parse(data); // 데이터가 JSON 문자열인 경우 파싱
            setUser(userData);
          } catch (error) {
            console.error('로그인 상태 확인 중 JSON 파싱 오류:', error);
            setUser(null);
          }
        } else {
          setUser(null);
        }
        setLoading(false); // 로딩 완료
      })
      .catch(error => {
        console.error('로그인 상태 확인 중 오류:', error);
        setLoading(false); // 오류 발생 시에도 로딩 종료
      });
  }, []);

  if (loading) {
    return <div>로딩 중...</div>; // 로딩 중일 때 표시
  }

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/freeboard" element={<FreeBoard />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* 게시판 관련 라우트 */}
        <Route path="/boards/:boardId" element={<FreeBoard />} />
        <Route path="/boards/:boardId/new-post" element={<NewPost user={user} />} />
        <Route path="/boards/:boardId/posts/:postId" element={<PostDetail user={user}/>} />
        <Route path="/boards/:boardId/posts/:postId/edit" element={<NewPost user={user}/>} /> {/* 수정 시 NewPost 재사용 */}

        {/* 놀이터 및 게시판 생성 관련 라우트 */}
        <Route path="/playground" element={<Playground />} />
        <Route path="/create-board" element={<CreateBoard user={user} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
