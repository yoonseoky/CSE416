import React, { useState } from "react";
import Nav from '../Component/nav';
import { useLocation } from 'react-router-dom';

function EditProfile() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const location = useLocation();
  const state = location.state.user;

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit form data to the backend
  };

  return (
      <div className="Edit_background">
        <Nav user = {state}/>
        <div className="profile">
        <form onSubmit={handleSubmit}>
            <label>
            <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
            </label>
            <br></br>
            <label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br></br>
            <label>
            <input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            <br></br>
            <button type="submit" onClick={handleSubmit}>Save Changes</button>
        </form>
        </div>
    </div>
  );
}

export default EditProfile;
