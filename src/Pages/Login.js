import React from 'react';
import Nav from '../Component/nav';
import GoogleLogin from '../Component/GoogleOAuth';
import { useEffect } from 'react';
import {gapi} from 'gapi-script';
const clientID = "807197922292-712nlt2ij625oqc3e0hkdjdmpvk6447j.apps.googleusercontent.com";
function Login() {
    useEffect(() =>{
        function start(){
           gapi.client.init({
            clientID: clientID,
            scope:""
           })
        };
        gapi.load('client:auto2',start);
    },[]);
    return (
      <div>
        <Nav/>
          <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>login</button>
          <p className="message">Not registered? <a href="Signup">Create an account</a></p>
          <p className="other-way-to-signin">-----Easier Sign-in-----</p>
          <div className='google-Login'>
          <GoogleLogin></GoogleLogin>
          </div>
          
        </form>
      </div>
    </div>
      </div>
    );
  }
  export default Login;