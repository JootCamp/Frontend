import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Playground.css';
import { API_BASE_URL } from '../config';

const Playground = () => {
  const [boards, setBoards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // API 명세에 맞게 게시판 목록을 가져옴
    fetch(`${API_BASE_URL}/boards`)
      .then(response => response.json())
      .then(data => setBoards(data)) // 'id'를 사용하여 데이터 설정
      .catch(error => console.error('Error fetching boards:', error));
  }, []);

  const handleCreateBoard = () => {
    navigate('/create-board'); // 게시판 생성 페이지로 이동
  };

  const handleBoardClick = (boardId) => {
    navigate(`/boards/${boardId}`); // 클릭한 게시판으로 이동
  };

  return (
    <div className="playground-container">
      <h2>놀이터</h2>
      <div className="boards-list">
        {boards.length > 0 ? (
          boards.map(board => (
            <div 
              key={board.id}  // API 명세서에 맞춰 'id' 사용
              className="board-item" 
              onClick={() => handleBoardClick(board.id)}  // 'boardId'를 'id'로 수정
            >
              <h3>{board.title}</h3>
              <p>{board.description}</p>
            </div>
          ))
        ) : (
          <p>게시판이 없습니다. 새로운 게시판을 생성해보세요!</p>
        )}
      </div>
      <button className="create-board-button" onClick={handleCreateBoard}>게시판 생성</button>
    </div>
  );
};

export default Playground;
