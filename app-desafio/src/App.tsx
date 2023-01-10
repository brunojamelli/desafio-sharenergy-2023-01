import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import HttpCat from './pages/HttpCat';
function App() {
  return (
    <>
        <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />            
          <Route path='/random' element={<HttpCat />} /> 
        </Routes>
      </Router> 
    </>
  );
}

export default App;
