import React, { useState } from 'react';
import Nav from '../Component/nav';
function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, for example, by sending the data to a server or performing validation
  };

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
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Signup;
