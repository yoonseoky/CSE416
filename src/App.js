import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Main from './Pages/Main';
import Edit from './Pages/EditProfile';
import TimetablePage from './Pages/TimetablePage';
import ProfReview from './Pages/ProfReview';
import './App.css';
import Signup from './Pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Main" element={<Main />}></Route>
        <Route path="/timetable" element={<TimetablePage />}></Route>
        <Route path="/profreview" element={<ProfReview />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/EditProfile" element={<Edit />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
