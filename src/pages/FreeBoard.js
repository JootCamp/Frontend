import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FreeBoard.css';

const FreeBoard = () => {
  const [posts, setPosts] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || []; 
    setPosts(storedPosts);
  }, []);

  return (
    <div className="freeboard-container">
      <h2>자유게시판</h2>
      {posts.length > 0 ? (
        <div className="post-list">
          {posts.map(post => (
            <div key={post.id} className="post-item" onClick={() => navigate(`/post/${post.id}`)}>
              <div className="post-info">
                <h3 className="post-title">{post.title}</h3>
                <div className="post-meta">
                  <span className="post-author">작성자: {post.author}</span>
                  <span className="post-views">조회수: {post.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>게시글이 없습니다. 글쓰기를 통해 새 게시글을 작성해보세요.</p>
      )}
      <button className="write-button" onClick={() => navigate('/new-post')}>글쓰기</button>
    </div>
  );
};

export default FreeBoard;
