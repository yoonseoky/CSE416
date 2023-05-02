import React from 'react';
import Nav from '../Component/nav';
import ProfNav from '../Component/prof_nav'
import RReviews from '../Component/Recent_review'
import { useLocation } from 'react-router-dom';

function ProfReview() {
    const location = useLocation();
    const state = location.state.user;
    if(state === false){
      return(
        <div>
          <Nav user = {state}></Nav>
          <ProfNav></ProfNav>
        </div>
      );
    }
      return (
        <div>
          <Nav user = {state}></Nav>
          <ProfNav ></ProfNav>
          <RReviews></RReviews>
        </div>
      );
    
  }
  
  export default ProfReview;