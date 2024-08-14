import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './FreeBoard.css';

const API_BASE_URL = 'http://jootcamp.kro.kr';

const FreeBoard = () => {
  const [posts, setPosts] = useState([]); // 게시글 데이터를 관리할 상태
  const { boardId } = useParams(); // 현재 게시판 ID 가져오기
  const navigate = useNavigate();

  useEffect(() => {
    // 특정 게시판의 게시글 목록 조회
    fetch(`${API_BASE_URL}/boards/${boardId}/posts`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, [boardId]);

  const handleCreatePost = () => {
    navigate(`/boards/${boardId}/new-post`);
  };

  const handleViewPost = (postId) => {
    navigate(`/boards/${boardId}/posts/${postId}`);
  };

  const handleUpdatePost = (postId) => {
    navigate(`/boards/${boardId}/posts/${postId}/edit`);
  };

  const handleDeletePost = (postId) => {
    fetch(`${API_BASE_URL}/boards/${boardId}/posts/${postId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setPosts(posts.filter(post => post.id !== postId));
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div className="freeboard-container">
      <h2>자유게시판</h2>
      {posts.length > 0 ? (
        <div className="post-list">
          {posts.map(post => (
            <div key={post.id} className="post-item">
              <div className="post-info">
                <h3 className="post-title" onClick={() => handleViewPost(post.id)}>{post.title}</h3>
                <div className="post-meta">
                  <span className="post-author">작성자: {post.author}</span>
                  <span className="post-views">조회수: {post.views}</span>
                  <button onClick={() => handleUpdatePost(post.id)}>수정</button>
                  <button onClick={() => handleDeletePost(post.id)}>삭제</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>게시글이 없습니다. 글쓰기를 통해 새 게시글을 작성해보세요.</p>
      )}
      <button className="write-button" onClick={handleCreatePost}>글쓰기</button>
    </div>
  );
};

export default FreeBoard;
