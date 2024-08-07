import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPost.css';

const NewPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 임시로 글 데이터를 콘솔에 출력하고 게시판 페이지로 이동합니다.
    console.log({ title, content });
    navigate('/board');
  };

  return (
    <div className="new-post-container">
      <h2>새 글 작성</h2>
      <form className="new-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">작성</button>
      </form>
    </div>
  );
};

export default NewPost;
