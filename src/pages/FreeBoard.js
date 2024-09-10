import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/FreeBoard.css';
import { API_BASE_URL } from '../config';

const FreeBoard = () => {
  const [posts, setPosts] = useState([]);
  const [metadata, setMetadata] = useState({}); // 페이지네이션 메타데이터 추가
  const { boardId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/boards/${boardId}/posts?size=20&page=1`)
      .then(response => response.json())
      .then(data => {
        setPosts(data.data || []); // API 명세서에 맞게 'data'로 접근
        setMetadata(data.metadata); // 페이지네이션 메타데이터 설정
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, [boardId]);

  const handleViewPost = (postId) => {
    navigate(`/boards/${boardId}/posts/${postId}`);
  };

  const handleCreatePost = () => {
    navigate(`/boards/${boardId}/new-post`);
  };

  const handleDeletePost = (postId) => {
    fetch(`${API_BASE_URL}/boards/${boardId}/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 1, // 추가: API 명세에 맞게 삭제 요청에 userId 등 전달
        userEmail: 'user@example.com',
        nickname: 'User',
      }),
    })
      .then(() => {
        setPosts(posts.filter(post => post.id !== postId)); // API 명세서에 맞게 'id'로 삭제
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div className="freeboard-container">
      <h2>자유게시판</h2>
      {posts.length > 0 ? (
        <div className="post-list">
          {posts.map(post => (
            <div key={post.id} className="post-item" onClick={() => handleViewPost(post.id)}>
              <div className="post-info">
                <h3 className="post-title">{post.title}</h3>
                <div className="post-meta">
                  <span className="post-author">작성자: {post.userId}</span>
                  <span className="post-date">작성일: {post.time}</span>
                </div>
              </div>
              <div className="post-actions">
                <button className="view-button">보기</button>
                <button className="delete-button" onClick={(e) => {e.stopPropagation(); handleDeletePost(post.id)}}>삭제</button>
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
