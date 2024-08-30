import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import FreeBoard from './pages/FreeBoard';
import NewPost from './pages/NewPost';
import PostDetail from './pages/PostDetail';
import ProfilePage from './pages/ProfilePage';
import SignupPage from './pages/SignupPage';

const App = () => {
  const [user, setUser] = useState(null); // 전역으로 로그인 상태 관리

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} /> {/* setUser 전달 */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/freeboard" element={<FreeBoard />} />
        <Route path="/profile" element={<ProfilePage />} />
        
        {/* 게시판 관련 라우트 */}
        <Route path="/boards/:boardId" element={<FreeBoard />} />
        <Route path="/boards/:boardId/new-post" element={<NewPost />} />
        <Route path="/boards/:boardId/posts/:postId" element={<PostDetail />} />
        <Route path="/boards/:boardId/posts/:postId/edit" element={<NewPost />} /> {/* 수정 시 NewPost 재사용 */}
      </Routes>
    </Router>
  );
};

export default App;
