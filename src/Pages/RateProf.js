import React from 'react';
import Nav from '../Component/nav';
import { useLocation } from 'react-router-dom';

function RateProf() {
  const location = useLocation();
  const state = location.state.user;
  const profName = location.state.profName;
    return (
      <div>
        <Nav user = {state}></Nav>
        <div className='upper-bar'>
          <p className='professor-name'>{profName}</p>
        </div>
        <div className = 'selectCourse-background'>
        <div className='select-course'>
          <p className='select-courseP'> Select Course:
          <select id='selectCourse' className='selectDropbar'>
            <option value="">Select a course</option>
            <option value="">CSE101</option>
          </select></p>
        </div>
        <div className='select-course'>
          <p className='select-courseP'> Rate the Professor:
          <select id='selectCourse' className='selectDropbar'>
            <option value="">Select a Rate</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select></p>
        </div>
        <div className='select-course'>
          <p className='select-courseP'> Letter grade you got:
          <select id='selectCourse' className='selectDropbar'>
            <option value="">Select a grade</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
          </select></p>
        </div>
        <div className='select-course'>
          <p className='select-courseP'> Semester you took:
          <select id='selectCourse' className='selectDropbar'>
            <option value="">Select a semester</option>
            <option value="2019 spring">2019 spring</option>
            <option value="2019 fall">2019 fall</option>
            <option value="2020 spring">2020 spring</option>
            <option value="2020 fall">2020 fall</option>
            <option value="2021 spring">2021 spring</option>
            <option value="2021 fall">2021 fall</option>
            <option value="2022 spring">2022 spring</option>
            <option value="2022 fall">2022 fall</option>
            <option value="2023 spring">2023 spring</option>
            {/* <option value="2023 fall">2023 fall</option> */}
          </select></p>
        </div>
        <div className='select-course'>
          <p className='select-courseP'> Comment:
          <input className='rateComment' type="text"></input></p>
        </div>
        </div>
      </div>
    );
  }
  
  export default RateProf;