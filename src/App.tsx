import React from 'react';
import { Routes,Route,BrowserRouter } from 'react-router-dom'

import { AuthContextProvider } from './context/AuthContext';

import { Home } from './pages/Home'
import { EducatorRegister } from './pages/EducatorRegister'
import { EducatorLanding } from './pages/EducatorLanding'

import './style/global.scss'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/educators' element={<EducatorLanding/>} />
          <Route path='/educators/new/register' element={<EducatorRegister/>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
