import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom'

import './style/global.scss'

import { LandingPage } from './pages/LandingPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
