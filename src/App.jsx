import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './pages/Footer'
import { Route, Routes } from 'react-router-dom'
import Project from './pages/Project'

function App() {
  return (
    <div >
        <>
            <Navbar/>
            <Routes>
               <Route path='/' element={<Home/>} /> 
               <Route path='/projects'  element={<Project/>}/> 
            </Routes>
            <Footer/>
        </>
    </div>
  )
}

export default App
