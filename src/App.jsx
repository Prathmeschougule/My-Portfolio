import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Project from './pages/Project'
import WhatsApp from './components/WhatsApp';
import German from './components/German'    // add this import

function App() {
  const location = useLocation();
  const hideShell = location.pathname === '/german';

  return (
    <div>
      {!hideShell && <WhatsApp/>}
      <>
        {!hideShell && <Navbar/>}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Project/>} />
          <Route path='/german' element={<German/>} />   {/* new route */}
        </Routes>
        {!hideShell && <Footer/>}
      </>
    </div>
  )
}

export default App
