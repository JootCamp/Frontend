import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <h2>Welcome to Jootcamp</h2>
      <nav className="content-nav">
        <button onClick={() => alert('All Content clicked')}>All Content</button>
        <button onClick={() => alert('Announcements clicked')}>Announcements</button>
        <button onClick={() => alert('My Information clicked')}>My Information</button>
      </nav>
      <div className="content-sections">
        {/* Your sections go here */}
      </div>
    </main>
  );
};

export default MainContent;
