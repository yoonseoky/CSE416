import React from 'react';
import {Link,useLocation } from 'react-router-dom';
const Nav = ({user}) => {
    if( user == true){
        return (
            <div className="top-bar">
            <div className="app-name">SUNY KOREA Community</div>
            <div className="nav-links">
              <Link to= "/" state = {{user:true}}>Home</Link>
              <Link to="/Timetable" state = {{user:true}}>Timetable</Link>
              <Link to="/ProfReview" state = {{user:true}}>ProfReview</Link>
            </div>
            <div className="login-signup">
            <img src="account_default.svg" alt="default_profile"/>
                 <Link to = '/EditProfile'>Gyuri Kim</Link>
                 <Link to='/' state = {{user:false}}>Log out</Link>
            </div>
          </div>
            );
    }
    else{
        return (
            <div className="top-bar">
              <div className="app-name">SUNY KOREA Community</div>
              <div className="nav-links">
                <Link to="/"state = {{user:false}}>Home</Link>
                <Link to="/Timetable"state = {{user:false}}>Timetable</Link>
                <Link to="/ProfReview"state = {{user:false}}>ProfReview</Link>
              </div>
              <div className="login-signup">
                <Link to="/Login" state = {{user:false}}>Log In</Link>
                <Link to="/signup"state = {{user:false}}>Sign Up</Link>
              </div>
            </div>
          );
    }
    
  }
  
  export default Nav;