import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import RandomUsers from './pages/RandomUsers';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <p>a</p>
    //   </header>
    // </div>
    <>
        <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />            
          <Route path='/random' element={<RandomUsers />} />   
        </Routes>
      </Router> 
    </>
  );
}

export default App;
