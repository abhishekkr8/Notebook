
import './App.css';
import React, { useState } from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About'; 
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';

function App() {
  return (
    < NoteState >
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      {/* <Alert></Alert> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
  
          </Routes>
      </BrowserRouter>
    </div>
    </NoteState >
  );
}

export default App;
