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
      userId: user.id,
      userEmail: user.email,
      nickname: user.nickname
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
          return response.json().then(errorData => {
            throw new Error(errorData.message || '게시판 생성에 실패했습니다.');
          });
        }
        return response.json();
      })
      .then((data) => {
        const boardId = data.id; // 생성된 게시판 ID 가져오기
        navigate(`/boards/${boardId}`); // 생성 후 해당 게시판으로 이동
      })
      .catch(error => {
        console.error('Error creating board:', error);
        setError(error.message || '서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.');
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
