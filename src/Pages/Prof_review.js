import React from 'react';
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import Nav from '../Component/nav';
import ProfNav from '../Component/prof_nav'
function Prof_review() {
    const location = useLocation();
    const state = location.state.user;
    const profInfo  = {
        name:"Arthur Lee",
        overall: 4.5,
    };
    return(
        <div>
            <Nav user = {state}></Nav>
            <ProfNav></ProfNav>
            <div className='Rating_background'>
                <div className='Rating'>
                    <p className='overall'>{profInfo.overall}/5</p>
                    <p className='prof_name'>{profInfo.name}</p>
                </div>
                <div className='Rate_button'>
                    <button className='rate_btn' type="submit">Rate Professor</button>
                </div>
            </div>
            <div className='Prof_comments'>
                
            </div>
        </div>
    )
  }
  
  export default Prof_review;