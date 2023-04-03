import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Edit from './Pages/EditProfile';
import TimetablePage from './Pages/TimetablePage';
import ProfReview from './Pages/ProfReview';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/timetable" element={<TimetablePage />}></Route>
        <Route path="/profreview" element={<ProfReview />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
