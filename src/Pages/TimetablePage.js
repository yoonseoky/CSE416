import React from 'react';
import Nav from '../Component/nav';
import ChatList from '../Component/ChatList';
import Chat from '../Component/Chat';
import Timetable from '../Component/Timetable';

function TimetablePage() {
    return (
      <>
        <Nav></Nav>
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