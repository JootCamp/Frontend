import React from 'react';
import { useAuth } from '../context/AuthContext';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <h2>내 정보</h2>
      {user ? (
        <div className="profile-details">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Name:</strong> {user.name}</p>
        </div>
      ) : (
        <p>로그인되지 않았습니다.</p>
      )}
    </div>
  );
};

export default ProfilePage;
