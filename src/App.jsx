// App.js
import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingScreen from './pages/3dPortfolio/components/loadingPage/loadingPage';

const ThreeScene = lazy(() => import('./pages/3dPortfolio/ThreeScene') )
const NotFound = lazy(() => import('./pages/notFound/notfound') )
const Portfolio = lazy(() => import('./pages/portfolio/portfolio') )

function App() {

  const windowWidth = window.innerWidth;

  return (
    <Router >
      {windowWidth < 768 ? 
        <Suspense>
          <Routes>
            <Route path='/' element={<Portfolio/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense> : 
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path='/' element={<ThreeScene/>} />
              <Route path='/portfolio' element={<Portfolio/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        }
    </Router>
  );
}

export default App;