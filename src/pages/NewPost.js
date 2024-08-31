import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NewPost.css';

const API_BASE_URL = 'http://13.125.19.45:8080';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { boardId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      content,
      bId: boardId, // 게시판 ID 포함
    };

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
        navigate(`/boards/${boardId}`);
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
