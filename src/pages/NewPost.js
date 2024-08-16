import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NewPost.css';

const API_BASE_URL = 'http://13.125.19.45:8080';

const NewPost = () => {
  const [title, setTitle] = useState(''); // 제목 상태 관리
  const [content, setContent] = useState(''); // 내용 상태 관리
  const { boardId } = useParams(); // URL에서 boardId를 가져옴
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!boardId) {
      console.error('boardId is undefined.');
      return;
    }

    const newPost = {
      title,
      content,
      author: '익명', // 로그인 기능이 있다면 실제 사용자 정보로 교체
    };
    
    // API 호출하여 새로운 게시글 생성
    fetch(`${API_BASE_URL}/boards/${boardId}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create post');
        }
        return response.json();
      })
      .then(() => {
        navigate(`/boards/${boardId}`); // 성공 시 해당 게시판 페이지로 이동
      })
      .catch(error => console.error('Error creating post:', error));
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
