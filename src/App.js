import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Main from './Pages/Main';
import Edit from './Pages/EditProfile';
import TimetablePage from './Pages/TimetablePage';
import ProfReview from './Pages/ProfReview';
import ProfReview1 from './Pages/Prof_review';
import './App.css';
import Signup from './Pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import RateProf from './Pages/RateProf';

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
        <Route path="/profreview1" element={<ProfReview1/>}></Route>
        <Route path="/RateProf" element={<RateProf/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
