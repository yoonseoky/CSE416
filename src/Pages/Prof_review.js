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

    const review = [{
        course: "CSE",
        coursenumber: "101",
        courseName:"Computer Science Principles",
        Instructor: "Arthur Lee",
        Rate: 5,
        comments:"This is a comment"
    },{
        course: "CSE",
        coursenumber: "114",
        courseName:"Introduction to Object-Oriented Programming",
        Instructor: "Antonino Mione",
        Rate: 4,
        comments:"This is a comment"
    },{
        course: "CSE",
        coursenumber: "214",
        courseName:"Data Structure",
        Instructor: "Byungkon Kang",
        Rate: 4,
        comments:"This is a comment"
    },{
        course: "CSE",
        coursenumber: "214",
        courseName:"Data Structure",
        Instructor: "Byungkon Kang",
        Rate: 4,
        comments:"This is a comment"
    },{
        course: "CSE",
        coursenumber: "214",
        courseName:"Data Structure",
        Instructor: "Byungkon Kang",
        Rate: 4,
        comments:"This is a comment"
    },{
        course: "CSE",
        coursenumber: "214",
        courseName:"Data Structure",
        Instructor: "Byungkon Kang",
        Rate: 4,
        comments:"This is a comment"
    }]
    
    const profInfo  = {
        name:profName,
        overall: 4.5,
    };
    const goRatingPage = () =>{
        navigate('/RateProf',{state:{user:true,profName:profName}})
    }
    const reviews = (review)=>{
        var table = [];
        for(var i=0;i<review.length;i++){
            table.push(<div className='Review1'><p className='courseinfo'>Course Name: {review[i].course} {review[i].coursenumber} - {review[i].courseName}, Instructor: {review[i].Instructor}</p><div className='Rate'> {review[i].Rate}</div><div className='comment_box'><p className='comments'> Comments:</p><p className='comments_text'>{review[i].comments}</p></div></div>);
        }
        return table;
    }
    if(profInfo.name===""){
        return(<div>
                <Nav user = {state}></Nav>
                <ProfNav></ProfNav>
        </div>)
    }
    else{
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
                    <div className='commentBox'>
                    {reviews(review)}
                    </div>
                </div>
            </div>
        )
    }
    
  }
  
  export default Prof_review;