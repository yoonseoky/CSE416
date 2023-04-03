import React from 'react';
import Topnav from '../Component/Topnav';
import { Link, useNavigate } from "react-router-dom";

function Log(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();  
}

function Login() {
    return (
      <div>
        <Topnav />
        <form onSubmit={Log}>
          <div>
            <label htmlFor='id'>id</label>
            <input id="id" type="text"></input>
          </div>
          <div>
            <label htmlFor='pwd'>pwd</label>
            <input type="password"></input>
          </div>
          <button>Forgot your pwd?</button>
          <Link to="/timetable">Log in</Link> {/* need to be changed to <input type="submit"></input> with navigation*/}
        </form>
      </div>
    );
  }
  
  export default Login;