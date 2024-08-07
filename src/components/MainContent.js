import React from 'react';
import InfoSection from './InfoSection';
import AnnouncementSection from './AnnouncementSection';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <h2>Welcome to Zootcamp</h2>
      <nav className="content-nav">
        <a href="#">All Content</a>
        <a href="#">Announcements</a>
        <a href="#">My Information</a>
      </nav>
      <div className="content-sections">
        <InfoSection />
        <AnnouncementSection />
      </div>
    </main>
  );
};

export default MainContent;
