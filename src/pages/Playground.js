import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Playground.css';
import { API_BASE_URL } from '../config';



const Playground = () => {
  const [boards, setBoards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/boards`)
      .then(response => response.json())
      .then(data => setBoards(data))
      .catch(error => console.error('Error fetching boards:', error));
  }, []);

  const handleCreateBoard = () => {
    navigate('/create-board');
  };

  const handleBoardClick = (boardId) => {
    navigate(`/boards/${boardId}`);
  };

  return (
    <div className="playground-container">
      <h2>놀이터</h2>
      <div className="boards-list">
        {boards.length > 0 ? (
          boards.map(board => (
            <div 
              key={board.bId} 
              className="board-item" 
              onClick={() => handleBoardClick(board.bId)}
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
