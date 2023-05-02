import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Nav from '../Component/nav';
import ProfNav from '../Component/prof_nav'
function Prof_review() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state.user;
    const profName = location.state.profName;

    const profInfo  = {
        name:profName,
        overall: 4.5,
    };
    const goRatingPage = () =>{
        navigate('/RateProf',{state:{user:true,profName:profName}})
    }
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
                    <button className='rate_btn' type="submit" onClick={goRatingPage}>Rate Professor</button>
                </div>
            </div>
            <div className='Prof_comments'>
                
            </div>
        </div>
    )
  }
  
  export default Prof_review;