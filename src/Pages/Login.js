import React,{useState}from 'react';
import Nav from '../Component/nav';
// import GoogleLogin from '../Component/GoogleOAuth';
import { useNavigate } from 'react-router-dom';


// const clientID = "807197922292-712nlt2ij625oqc3e0hkdjdmpvk6447j.apps.googleusercontent.com";
const tempEmail = ["gyuri.kim.2@stonybrook.edu"]
const tempPassword = ["1234"]

function Login () {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate();

  const clickLogin = (email,password) =>{
    if(email.includes(tempEmail)===true && tempPassword[tempEmail.indexOf(email)]===password){
      navigate("/Main",{state:{user:true}});
      // user value should be changed to true so that nav bar changes
    }
    else if(email.includes(tempEmail)===true && tempPassword[tempEmail.indexOf(email)]!==password){
      alert("Password is incorrect.");
    }
    else if(email.includes(tempEmail)===false){
      alert("Email is not exist.")
    }
  }
    return (
      <div>
        <Nav></Nav>
          <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" required value = {email} onChange={ (e)=> setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value ={Password} onChange={ (e)=> setPassword(e.target.value)}placeholder="password"/>
          <button onClick={(e)=>clickLogin(email,Password)}>Login</button>
          <p className="message">Not registered? <a href="Signup">Create an account</a></p>
          {/* <p className="other-way-to-signin">-----Easier Sign-in-----</p>
          <div className='google-Login'>
          <GoogleLogin></GoogleLogin>
          </div> */}
          
        </form>
      </div>
    </div>
      </div>
    );
  }
  export default Login;