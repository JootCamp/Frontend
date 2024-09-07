import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Board.css';


const Board = () => {
  const navigate = useNavigate();
  const [posts] = React.useState([{ id: 1, title: '안녕하세요', content: '저는 한강섭입니다' }]);

  return (
    <div className="board-container">
      <h2>게시판</h2>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post-item" onClick={() => navigate(`/post/${post.id}`)}>
            <span className="post-title">{post.title}</span>
          </div>
        ))}
      </div>
      <button className="write-button" onClick={() => navigate('/new-post')}>글쓰기</button>
    </div>
  );
};

export default Board;
