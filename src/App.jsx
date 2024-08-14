import { useState } from 'react'
import './App.css'
import Home from './components/page/home.jsx';
import About_us from './components/page/about_us.jsx';
import Services from './components/page/services.jsx';
import Contact from './components/page/contact.jsx';

import Read_more from './components/page/read_more.jsx';
import Explore_design from './components/page/explore_design.jsx';
import Conditions from './components/page/condition.jsx';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const isReadMorePage = location.pathname === '/read-more';
  const isexploreMore = location.pathname === '/explore-designs';
  const isconditions = location.pathname === '/conditions';
  const isHeader = isReadMorePage || isexploreMore || isconditions ;

  return (
    <div className='container'>
      {!isHeader && <Home />}
      <Routes>
        <Route path="/" element={<>
          <About_us />
          <Services />
          <Contact />
        </>} />
        <Route path="/read-more" element={<Read_more />} />
        <Route path="/explore-designs" element={<Explore_design />} /> {/* for explore more option */}
        <Route path="/conditions" element={<Conditions />} />
      </Routes>
    </div>
  );
}

export default App;

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Omkar-SilentKiller/sw-softwares.git
// git push -u origin main