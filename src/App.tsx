import React from 'react';
import { Routes,Route,BrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { EducatorLogin } from './pages/EducatorLogin'
import { EducatorLanding } from './pages/EducatorLanding'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/educators' element={<EducatorLanding/>} />
        <Route path='/educators/login' element={<EducatorLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
