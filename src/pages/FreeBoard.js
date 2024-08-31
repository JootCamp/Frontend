import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './FreeBoard.css';

const API_BASE_URL = 'http://13.125.19.45:8080';

const FreeBoard = () => {
  const [posts, setPosts] = useState([]); // 게시글 데이터를 관리할 상태
  const { boardId } = useParams(); // 현재 게시판 ID 가져오기
  const navigate = useNavigate();

  // 게시글 목록 조회
  useEffect(() => {
    fetch(`${API_BASE_URL}/boards/${boardId}/posts?size=20&page=1`)
      .then(response => response.json())
      .then(data => setPosts(data.results))
      .catch(error => console.error('Error fetching posts:', error));
  }, [boardId]);

  // 게시글 클릭 시 게시글 상세 페이지로 이동
  const handleViewPost = (postId) => {
    navigate(`/boards/${boardId}/posts/${postId}`);
  };

  // 게시글 작성 페이지로 이동
  const handleCreatePost = () => {
    navigate(`/boards/${boardId}/new-post`);
  };

  // 게시글 삭제
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
            <div key={post.pId} className="post-item">
              <div className="post-info" onClick={() => handleViewPost(post.pId)}>
                <h3 className="post-title">{post.title}</h3>
                <div className="post-meta">
                  <span className="post-author">작성자: {post.writer}</span>
                  <span className="post-views">조회수: {post.views}</span>
                  <span className="post-date">작성일: {post.created_at}</span>
                </div>
              </div>
              <div className="post-actions">
                <button onClick={() => handleViewPost(post.pId)}>보기</button>
                <button onClick={() => handleDeletePost(post.pId)}>삭제</button>
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
