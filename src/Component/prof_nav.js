import React from "react";

function prof_nav() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/ProfReview" className="navbar-brand">
          Rate the Professors
        </a>
        <div className="navbar-dropdown">
          <label htmlFor="course-dropdown" className="navbar-label"></label>
          <select id="course-dropdown" className="navbar-select">
            <option value="">Select a course</option>
            <option value="course1">CSE</option>
            <option value="course2">AMS</option>
            <option value="course3">MEC</option>
            <option value="course4">BUS</option>
          </select>
        </div>
        <form className="navbar-form">
          <input type="text" placeholder="Professor Name" className="navbar-search" />
          <button type="submit" className="navbar-button">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default prof_nav;
