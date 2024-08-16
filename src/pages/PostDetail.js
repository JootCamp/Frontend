import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PostDetail.css';

const API_BASE_URL = 'http://jootcamp.kro.kr';  // API 기본 URL 설정

const PostDetail = () => {
  const { boardId, postId } = useParams(); // 게시글의 ID를 URL에서 가져옵니다.
  const navigate = useNavigate();
  const [post, setPost] = useState(null); // 현재 게시글을 저장할 상태입니다.
  const [comments, setComments] = useState([]); // 댓글 목록을 저장할 상태입니다.
  const [newComment, setNewComment] = useState(''); // 새 댓글을 저장할 상태입니다.

  useEffect(() => {
    // 게시글 조회
    fetch(`${API_BASE_URL}/boards/${boardId}/posts/${postId}`)
      .then(response => response.json())
      .then(data => {
        setPost(data); // 백엔드에서 받은 게시글 데이터를 상태에 저장합니다.
        return fetch(`${API_BASE_URL}/boards/${boardId}/posts/${postId}/comments`);
      })
      .then(response => response.json())
      .then(data => setComments(data)) // 댓글 데이터를 상태에 저장합니다.
      .catch(error => console.error('Error fetching post or comments:', error));
  }, [boardId, postId]);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;

    const commentData = {
      content: newComment,
    };

    // 댓글 작성 API 호출
    fetch(`${API_BASE_URL}/boards/${boardId}/posts/${postId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then(response => response.json())
      .then(data => {
        setComments([...comments, data]); // 새 댓글을 기존 댓글에 추가
        setNewComment(''); // 입력란 초기화
      })
      .catch(error => console.error('Error adding comment:', error));
  };

  const handleDeleteComment = (commentId) => {
    // 댓글 삭제 API 호출
    fetch(`${API_BASE_URL}/boards/${boardId}/posts/${postId}/comments/${commentId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setComments(comments.filter(comment => comment.id !== commentId));
      })
      .catch(error => console.error('Error deleting comment:', error));
  };

  const handleDeletePost = () => {
    // 게시글 삭제 API 호출
    fetch(`${API_BASE_URL}/boards/${boardId}/posts/${postId}`, {
      method: 'DELETE',
    })
      .then(() => {
        navigate(`/boards/${boardId}`); // 삭제 후 게시판 페이지로 이동
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  if (!post) return <div>해당 글을 찾을 수 없습니다.</div>;

  return (
    <div className="post-detail-container">
      <h2>{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <div className="post-meta">
        <span>작성자: {post.author}</span>
        <span>조회수: {post.views}</span>
      </div>
      <button className="delete-post-button" onClick={handleDeletePost}>글 삭제</button>

      <div className="comments-section">
        <h3>댓글</h3>
        {comments.length > 0 ? (
          <ul className="comments-list">
            {comments.map((comment) => (
              <li key={comment.id} className="comment-item">
                <span className="comment-date">{comment.createdAt}</span>
                <p className="comment-content">{comment.content}</p>
                <button className="delete-comment-button" onClick={() => handleDeleteComment(comment.id)}>댓글 삭제</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>아직 댓글이 없습니다. 첫 댓글을 남겨보세요!</p>
        )}
      </div>

      <div className="comment-form">
        <textarea
          placeholder="댓글을 작성하세요..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="4"
        />
        <button onClick={handleAddComment}>댓글 작성</button>
      </div>
    </div>
  );
};

export default PostDetail;
