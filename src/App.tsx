import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom'

import './style/global.scss'

import { LandingPage } from './pages/LandingPage'
import { EducatorPage } from './pages/EducatorPage'
import { FormEducator } from './pages/FormEducator'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/educator" element={<EducatorPage/>}/>
        <Route path='/register/new/educator' element={<FormEducator/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
