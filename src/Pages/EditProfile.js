import React, { useState } from "react";
import Nav from '../Component/nav';
import { useLocation } from 'react-router-dom';

function EditProfile() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const location = useLocation();
  const state = location.state.user;
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit form data to the backend
  };

  return (
      <div>
        <Nav user = {state}/>
        <div className="profile">
        <h1>Edit Profile</h1>
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
            Confirm Password:
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            <button type="submit">Save Changes</button>
        </form>
        </div>
    </div>
  );
}

export default EditProfile;
