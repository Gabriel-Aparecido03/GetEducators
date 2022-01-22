import React from 'react';
import { Routes,Route,BrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { EducatorRegister } from './pages/EducatorRegister'
import { EducatorLanding } from './pages/EducatorLanding'

import './style/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/educators' element={<EducatorLanding/>} />
        <Route path='/educators/new/register' element={<EducatorRegister/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
