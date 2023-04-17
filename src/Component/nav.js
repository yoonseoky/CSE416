import React from 'react';
import { Link } from 'react-router-dom';
const user = false;
function nav() {
    if(user == true){
        return (
            <div className="top-bar">
            <div className="app-name">SUNY KOREA TimeTable</div>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/Timetable">Timetable</Link>
              <Link to="/ProfReview">ProfReview</Link>
            </div>
            <div className="topbar-right">
                 <a href="/EditProfile" className="profile-link">
                 <i className="bi bi-person-circle"></i>
                <span className="username">Gyuri Kim</span>
                 </a>
               </div>
          </div>
            );
    }
    else{
        return (
            <div className="top-bar">
              <div className="app-name">SUNY KOREA TimeTable</div>
              <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/Timetable">Timetable</Link>
                <Link to="/ProfReview">ProfReview</Link>
              </div>
              <div className="login-signup">
                <Link to="/Login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          );
    }
    
  }
  
  export default nav;