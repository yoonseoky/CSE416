import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Prof_nav() {
  const [Select, setSelected] = useState("");
  const [name,setName] = useState("");
  // const navigate = useNavigate();
  // const location = useLocation();
  // const state = location.state.user;

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleName = (e) =>{
    setName(e.target.value);
  }
  const onClick = () =>{
    if(window.location.pathname === "/profreview1"){
      window.location.reload()
    }
  }
  // const test = {
  //   course: Select,
  //   name: 'Arthur Lee'
  // }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/ProfReview" className="navbar-brand">
          Rate the Professors
        </a>
        <div className="navbar-dropdown">
          <label htmlFor="course-dropdown" className="navbar-label"></label>
          <select id="course-dropdown" onChange = {handleSelect} className="navbar-select">
            <option value="">Select a course</option>
            <option value="CSE">CSE</option>
            <option value="AMS">AMS</option>
            <option value="MEC">MEC</option>
            <option value="BUS">BUS</option>
            <option value="CHI">CHI</option>
            <option value="KOR">KOR</option>
          </select>
        </div>
        <form className="navbar-form">
          <input 
            type="text" 
            placeholder="Professor Name" 
            className="navbar-search" 
            onChange={handleName}
          />
          <Link to = "/profreview1" state = {{user:true, profName:name.toUpperCase(), selectedCourse:Select}}>
            <button type="submit" className="navbar-button" onClick={onClick}>Search</button>
          </Link>
          
        </form>
      </div>
    </nav>
  );
}
export default Prof_nav;
