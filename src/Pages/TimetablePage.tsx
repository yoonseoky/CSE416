import React from 'react';
import Topnav from '../Component/Topnav';
import ChatList from '../Component/ChatList';
import Chat from '../Component/Chat';
import Timetable from '../Component/Timetable';

function TimetablePage() {
    return (
      <>
        <Topnav></Topnav>
        <div style={{display: "flex"}}>

          <div style={{width: "30%"}}><ChatList></ChatList></div>

          <div style={{width: "70%"}}>
            <Chat></Chat>{/*hidden until chatroom is selected */}  
            <Timetable></Timetable>
          </div> 

        </div>
      </>
    );
  }
  
  export default TimetablePage;