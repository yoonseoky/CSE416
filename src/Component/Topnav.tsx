import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/Topnav.module.css';

function Topnav() {
    return (
      <div className={styles.Topnav}>
        <div>
        <p>SUNY Korea</p>
          <button>
            <img></img>
            <p>Username</p>
          </button>
        </div>
        <div>
          <Link to="/timetable">Timetable</Link>
          <Link to="ProfReview">Prof Review</Link>
        </div>
      </div>
    );
  }
  
  export default Topnav;