import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/CreateBoard.css';
import { API_BASE_URL } from '../config';

const CreateBoard = ({ user }) => { // user 객체를 props로 받음
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreateBoard = (e) => {
    e.preventDefault();

    if (!user || !user.id) {
      setError('사용자 정보가 누락되었습니다. 로그인 후 시도해 주세요.');
      return;
    }
    const newBoard = {
      title,
      description,
      userId: user.id,       // 명세에 맞게 userId 포함
      userEmail: user.email, // userEmail 포함
      nickname: user.nickname // nickname 포함
    };

    fetch(`${API_BASE_URL}/boards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBoard),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('게시판 생성에 실패했습니다.');
        }
        return response.json();
      })
      .then(() => {
        navigate('/playground'); // 생성 후 놀이터 페이지로 이동
      })
      .catch(error => {
        console.error('Error creating board:', error);
        setError('서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.');
      });
  };

  return (
    <div className="create-board-container">
      <h2>게시판 생성</h2>
      <form onSubmit={handleCreateBoard} className="create-board-form">
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="게시판 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="게시판 설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" className="create-button">생성</button>
      </form>
    </div>
  );
};

export default CreateBoard;
