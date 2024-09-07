import React from 'react';
import '../style/AnnouncementSection.css';

const AnnouncementSection = () => {
  return (
    <section className="announcement-section">
      <h2>Announcements</h2>
      <div className="announcement-item">
        <span>March 8, 2022</span>
        <p>New feature: Teams</p>
      </div>
      <div className="announcement-item">
        <span>March 1, 2022</span>
        <p>Welcome to Zootcamp!</p>
      </div>
      <div className="announcement-item">
        <span>February 22, 2022</span>
        <p>Introducing Zootcamp for teams</p>
      </div>
      <div className="announcement-item">
        <span>February 15, 2022</span>
        <p>Zootcamp is now available!</p>
      </div>
      <div className="announcement-item">
        <span>February 8, 2022</span>
        <p>Zootcamp is coming soon</p>
      </div>
    </section>
  );
};

export default AnnouncementSection;
