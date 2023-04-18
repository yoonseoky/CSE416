import React from 'react';
import Nav from '../Component/nav';
import ChatList from '../Component/ChatList';
import Chat from '../Component/Chat';
import Timetable from '../Component/Timetable';
import { useLocation } from 'react-router-dom';

function TimetablePage() {
    const location = useLocation();
    const state = location.state.user;
    return (
      <>
        <Nav user = {state}></Nav>
        <div style={{display: "flex"}}>

          <div style={{width: "30%"}}><ChatList></ChatList></div>

          <div style={{width: "70%"}}>
            {/* <Chat></Chat>hidden until chatroom is selected   */}
            <Timetable></Timetable>
          </div> 

        </div>
      </>
    );
  }
  
  export default TimetablePage;