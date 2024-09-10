import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/PostDetail.css';
import { API_BASE_URL } from '../config';

const PostDetail = ({ user }) => {
  const { boardId, postId } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  // 게시물 단건 조회
  useEffect(() => {
    fetch(`${API_BASE_URL}/boards/${boardId}/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));
  }, [boardId, postId]);

  // 게시글 삭제
  const handleDeletePost = () => {
    fetch(`${API_BASE_URL}/boards/${boardId}/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user.id,        // userId를 요청에 포함
        userEmail: user.email,  // userEmail을 요청에 포함
        nickname: user.nickname // nickname을 요청에 포함
      }),
    })
      .then(() => {
        navigate(`/boards/${boardId}`); // 삭제 후 게시판으로 이동
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  // 게시글 수정 페이지로 이동
  const handleEditPost = () => {
    navigate(`/boards/${boardId}/posts/${postId}/edit`);
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-detail-container">
      <h2>{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <div className="post-meta">
        <span>작성자: {post.userId}</span> {/* API 명세서에서 'userId'로 사용자 정보 표시 */}
        <span>작성일: {post.time}</span>  {/* 작성 시간 표시 */}
      </div>
      <button onClick={handleEditPost}>수정</button>
      <button onClick={handleDeletePost}>삭제</button>
    </div>
  );
};

export default PostDetail;
