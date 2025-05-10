import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/my-city" element={<MyCity />} />
        <Route path="/my-future" element={<MyFuture />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


