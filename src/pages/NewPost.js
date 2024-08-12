import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPost.css';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
      author: '익명', // 로그인 기능이 있다면 실제 사용자 정보로 교체
      views: 0,
    };
    
    // 기존의 게시글 리스트를 localStorage에서 가져옴
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    storedPosts.push(newPost); // 새로운 게시글을 추가
    localStorage.setItem('posts', JSON.stringify(storedPosts)); // 업데이트된 리스트를 저장
    
    navigate('/freeboard'); // 게시판 페이지로 이동
  };

  return (
    <div className="new-post-container">
      <h2>새 글 작성</h2>
      <form onSubmit={handleSubmit} className="new-post-form">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">작성</button>
      </form>
    </div>
  );
};

export default NewPost;
