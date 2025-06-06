import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import BreedPage from './pages/BreedPage';
import AboutPage from './pages/AboutPage';
import BreedDetailPage from './pages/BreedDetailPage'; 
import Navbar from './pages/components/Navbar';
import 'font-awesome/css/font-awesome.min.css';
import ArticlePage from './pages/ArticlePage';
import ArticleDetailPage from './pages/ArticleDetailPage'; 
import FAQPage from './pages/FAQPage';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/breeds" element={<BreedPage />} />
        <Route path="/breed/:id" element={<BreedDetailPage />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/article/:id" element={<ArticleDetailPage />} />

        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
