import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import InstrumentDetail from './components/InstrumentDetail';
import Footer from './components/Footer';
import './App.css';
import ResultsPage from './components/ResultsPage';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/instruments/:slug" element={<InstrumentDetail />} />
          {/* <Route path="/results" element={<ComingSoonPage title="Results" />} /> */}
          <Route path="/contact" element={<ComingSoonPage title="Contact" />} />
          <Route path="/results" element={<ResultsPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

// Placeholder component for pages not yet implemented
const ComingSoonPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="coming-soon">
    <div className="container">
      <h1>{title}</h1>
      <p>This page is coming soon. We're working hard to bring you more features!</p>
    </div>
  </div>
);

export default App;
