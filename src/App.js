import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import Board from './pages/Board';
import NewPost from './pages/NewPost';
import PostDetail from './pages/PostDetail';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
