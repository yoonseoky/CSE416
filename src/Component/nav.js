import React from 'react';
import {Link } from 'react-router-dom';
const Nav = ({user}) => {
  const userName = {username:"Gyuri Kim"}
    if( user === true){
        return (
            <div className="top-bar">
            <div className="app-name">SUKOCO</div>
            <div className="nav-links">
              <Link to= "/Main" state = {{user:true}}>Home</Link>
              <Link to="/Timetable" state = {{user:true}}>Timetable</Link>
              <Link to="/ProfReview" state = {{user:true}}>ProfReview</Link>
            </div>
            <div className="login-signup">
            <img className = "profileImage"src="account_default.svg" alt="default_profile"/>
                 <Link to = '/EditProfile' state = {{user:true}} >{userName.username}</Link>
                 <Link to='/' state = {{user:false}}>Log out</Link>
            </div>
          </div>
            );
    }
    else{
        return (
            <div className="top-bar">
              <div className="app-name">SUKOCO</div>
              <div className="nav-links">
                <Link to="/"state = {{user:false}}>Home</Link>
                <Link to="/"state = {{user:false}}>Timetable</Link>
                <Link to="/"state = {{user:false}}>ProfReview</Link>
              </div>
              <div className="login-signup">
                <Link to="/" state = {{user:false}}>Log In</Link>
                <Link to="/Signup"state = {{user:false}}>Sign Up</Link>
              </div>
            </div>
          );
    }
    
  }
  
  export default Nav;