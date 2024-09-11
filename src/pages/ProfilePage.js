import React from 'react';
import { useAuth } from '../context/AuthContext'; // AuthContext 사용 시
import '../style/ProfilePage.css';
import { API_BASE_URL } from '../config';

const ProfilePage = () => {
  const { user } = useAuth(); // AuthContext에서 user 가져오기

  return (
    <div className="profile-container">
      <h2>내 정보</h2>
      {user ? (
        <div className="profile-details">
          <p><strong>Username:</strong> {user.username}</p>
        </div>
      ) : (
        <p>로그인되지 않았습니다.</p>
      )}
    </div>
  );
};

export default ProfilePage;
