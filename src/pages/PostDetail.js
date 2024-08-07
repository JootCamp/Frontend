import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const post = { id: 1, title: '안녕하세요', content: '저는 한강섭입니다' }; // 임시 데이터
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    setComments([...comments, { id: comments.length + 1, text: newComment }]);
    setNewComment('');
  };

  return (
    <div className="post-detail-container">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="comments-section">
        <h3>댓글</h3>
        <div className="comments-list">
          {comments.map(comment => (
            <div key={comment.id} className="comment-item">
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
        <div className="comment-form">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글 작성"
          />
          <button onClick={handleAddComment}>댓글 달기</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
