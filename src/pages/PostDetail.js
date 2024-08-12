import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const selectedPost = storedPosts.find((p) => p.id === parseInt(id));
    
    if (selectedPost) {
      selectedPost.views += 1;
      localStorage.setItem('posts', JSON.stringify(storedPosts));
      setPost(selectedPost);
      setComments(selectedPost.comments || []);
    }
  }, [id]);

  const handleAddComment = () => {
    if (newComment.trim() === '') return;

    const updatedComments = [...comments, { text: newComment, date: new Date().toLocaleString() }];
    setComments(updatedComments);
    setNewComment('');

    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const updatedPosts = storedPosts.map((p) =>
      p.id === post.id ? { ...p, comments: updatedComments } : p
    );
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);

    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const updatedPosts = storedPosts.map((p) =>
      p.id === post.id ? { ...p, comments: updatedComments } : p
    );
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleDeletePost = () => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const updatedPosts = storedPosts.filter((p) => p.id !== post.id);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    navigate('/freeboard');
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
            {comments.map((comment, index) => (
              <li key={index} className="comment-item">
                <span className="comment-date">{comment.date}</span>
                <p className="comment-content">{comment.text}</p>
                <button className="delete-comment-button" onClick={() => handleDeleteComment(index)}>댓글 삭제</button>
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
