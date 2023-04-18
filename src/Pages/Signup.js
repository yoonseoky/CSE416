import React, { useState } from 'react';
import Nav from '../Component/nav';
function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, for example, by sending the data to a server or performing validation
  };
  const Submit_filter = (firstName,lastName,email,password) =>{
    console.log(email.slice(-15))
    if(firstName===''||lastName===''){
      alert("Please type your name.")
    }
    else if(!(email.slice(-14)==='stonybrook.edu'||email.slice(-15)==='sunykorea.ac.kr')){
      alert("Please use your school email.")
    }
    else if(password===''){
      alert("Please enter the password.")
    }
  }
  return (
  <div>
    <Nav></Nav>
    <div className="signup-page">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className='input-email'
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className='email-notice'>You should Sign-up with your school email</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={(e)=>Submit_filter(firstName,lastName,email,password)}>Sign up</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Signup;
