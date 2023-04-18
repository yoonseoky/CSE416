import React from 'react';
import Nav from '../Component/nav';
import ProfNav from '../Component/prof_nav'
import { useLocation } from 'react-router-dom';

function ProfReview() {
    const location = useLocation();
    const state = location.state.user;
    return (

      <div>
        <Nav user = {state}></Nav>
        <ProfNav></ProfNav>
      </div>
    );
  }
  
  export default ProfReview;