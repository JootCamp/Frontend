import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <section className="info-section">
      <h2>My Information</h2>
      <div className="info-item">
        <span>Profile</span>
        <p>Your personal information</p>
      </div>
      <div className="info-item">
        <span>Account</span>
        <p>Your email and password</p>
      </div>
      <div className="info-item">
        <span>Billing</span>
        <p>Your payment method</p>
      </div>
      <div className="info-item">
        <span>Team settings</span>
        <p>Your team and members</p>
      </div>
    </section>
  );
};

export default InfoSection;
