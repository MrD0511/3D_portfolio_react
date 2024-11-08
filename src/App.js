// App.js
import React from 'react';
import ThreeScene from './3dPortfolio/ThreeScene';
import Portfolio from './portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router >
        <Routes>
          <Route path='/' element={<ThreeScene/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
        </Routes>
    </Router>
  );
}

export default App;