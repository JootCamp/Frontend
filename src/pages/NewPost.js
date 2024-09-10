import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/NewPost.css';
import { API_BASE_URL } from '../config';

const NewPost = ({ user }) => { // user 객체를 props로 받아옴
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { boardId } = useParams(); // boardId를 URL에서 가져옴
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 게시글 생성 요청에 필요한 데이터
    const newPost = {
      title,
      content,
      userId: user.id, // userId는 사용자의 ID로 설정
      userEmail: user.email, // 사용자의 이메일
      nickname: user.nickname // 사용자의 닉네임
    };

    // 게시글 생성 요청
    fetch(`${API_BASE_URL}/boards/${boardId}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('게시글 생성에 실패했습니다.');
        }
        return response.json();
      })
      .then(() => {
        navigate(`/boards/${boardId}`); // 게시글 생성 후 해당 게시판으로 이동
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
