import React from 'react';
import '../style/Footer.css';

const Footer = () => {
  const posts = [
    'How to learn React',
    'Understanding JavaScript Closures',
    'CSS Grid vs Flexbox',
  ];

  return (
    <footer className="footer">
      <h2>Popular Posts</h2>
      <ul className="popular-posts">
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
