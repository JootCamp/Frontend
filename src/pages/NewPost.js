import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/NewPost.css';
import { API_BASE_URL } from '../config';

const NewPost = ({ user }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { boardId } = useParams(); // URL에서 boardId 가져오기
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user || !user.id) {
      alert('로그인이 필요합니다.');
      return;
    }

    // 게시글 생성 요청에 필요한 데이터
    const newPost = {
      title,
      content,
      userId: user.id, // 사용자 정보 설정
      userEmail: user.email,
      nickname: user.nickname,
    };

    fetch(`${API_BASE_URL}/boards/${boardId}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('게시글 생성에 실패했습니다.');
        }
        return response.json();
      })
      .then(() => {
        navigate(`/boards/${boardId}`); // 게시글 생성 후 해당 게시판으로 이동
      })
      .catch((error) => console.error('Error creating post:', error));
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
