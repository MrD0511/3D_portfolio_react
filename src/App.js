// App.js
import React from 'react'
import ThreeScene from './pages/3dPortfolio/ThreeScene';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/notFound/notfound';
import Portfolio from './pages/portfolio/portfolio';

function App() {
  return (
    <Router >
        <Routes>
          <Route path='/' element={<ThreeScene/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;