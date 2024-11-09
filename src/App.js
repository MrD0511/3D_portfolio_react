// App.js
import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const ThreeScene = lazy(() => import('./pages/3dPortfolio/ThreeScene') )
const NotFound = lazy(() => import('./pages/notFound/notfound') )
const Portfolio = lazy(() => import('./pages/portfolio/portfolio') )

function App() {
  return (
    <Router >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<ThreeScene/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;