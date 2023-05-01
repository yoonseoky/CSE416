import React from 'react';

function Recent_review() {
    const reviews = [{
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
    }]
    return(
        <div className='Recent_background'>
           <p className='Recent_Review'>Recent Reviews</p>
           <div className='Recent_box'>
                <div className='Review1'>
                    <p className='courseinfo'>Course Name: {reviews[0].course} {reviews[0].coursenumber} - {reviews[0].courseName}, Instructor: {reviews[0].Instructor}</p>
                        <div className='Rate'> {reviews[0].Rate}</div>
                        <div className='comment_box'>
                        <p className='comments'> Comments:</p>
                        <p className='comments_text'>{reviews[0].comments}</p>
                        </div>
                </div>
                <div className='Review1'>
                    <p className='courseinfo'>Course Name: {reviews[1].course} {reviews[1].coursenumber} - {reviews[1].courseName}, Instructor: {reviews[1].Instructor}</p>
                        <div className='Rate'> {reviews[1].Rate}</div>
                        <div className='comment_box'>
                        <p className='comments'> Comments:</p>
                        <p className='comments_text'>{reviews[1].comments}</p>
                        </div>
                </div>
                <div className='Review1'>
                    <p className='courseinfo'>Course Name: {reviews[2].course} {reviews[2].coursenumber} - {reviews[2].courseName}, Instructor: {reviews[2].Instructor}</p>
                        <div className='Rate'> {reviews[2].Rate}</div>
                        <div className='comment_box'>
                        <p className='comments'> Comments:</p>
                        <p className='comments_text'>{reviews[2].comments}</p>
                        </div>
                </div>
           </div>
        </div>
    )
  }
  
  export default Recent_review;