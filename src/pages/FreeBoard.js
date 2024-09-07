import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/FreeBoard.css';
import { API_BASE_URL } from '../config';

const FreeBoard = () => {
  const [posts, setPosts] = useState([]);
  const { boardId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/boards/${boardId}/posts?size=20&page=1`)
      .then(response => response.json())
      .then(data => setPosts(data.results || []))
      .catch(error => console.error('Error fetching posts:', error));
  }, [boardId]);

  const handleViewPost = (postId) => {
    navigate(`/boards/${boardId}/posts/${postId}`);
  };

  const handleCreatePost = () => {
    navigate(`/boards/${boardId}/new-post`);
  };

  const handleDeletePost = (postId) => {
    fetch(`${API_BASE_URL}/boards/${boardId}/posts`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postId }),
    })
      .then(() => {
        setPosts(posts.filter(post => post.pId !== postId));
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div className="freeboard-container">
      <h2>자유게시판</h2>
      {posts.length > 0 ? (
        <div className="post-list">
          {posts.map(post => (
            <div key={post.pId} className="post-item" onClick={() => handleViewPost(post.pId)}>
              <div className="post-info">
                <h3 className="post-title">{post.title}</h3>
                <div className="post-meta">
                  <span className="post-author">작성자: {post.writer}</span>
                  <span className="post-views">조회수: {post.views}</span>
                  <span className="post-date">작성일: {post.created_at}</span>
                </div>
              </div>
              <div className="post-actions">
                <button className="view-button">보기</button>
                <button className="delete-button" onClick={(e) => {e.stopPropagation(); handleDeletePost(post.pId)}}>삭제</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>게시글이 없습니다. 글쓰기를 통해 새 게시글을 작성해보세요.</p>
      )}
      <button className="create-post-button" onClick={handleCreatePost}>글쓰기</button>
    </div>
  );
};

export default FreeBoard;
