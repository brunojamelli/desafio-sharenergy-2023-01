import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import HttpCat from './pages/HttpCat';
import { RandomDog } from './pages/RandomDog';
function App() {
  return (
    <>
        <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />            
          <Route path='/cat' element={<HttpCat />} /> 
          <Route path='/dog' element={<RandomDog />} />
        </Routes>
      </Router> 
    </>
  );
}

export default App;
