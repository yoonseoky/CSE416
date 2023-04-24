import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../Component/nav';
let count = 0;
function Main(){
    const location = useLocation();
    console.log("",location);
    const state = location.state.user;
    if(count === 0){
        count= count+1;
        return(
            <div>
                <Nav user = {false}/>
                <div className='image'></div>
            </div>
        )
    }
    else{
        return(
            <div>
                <Nav user = {state}/>
                <div className='image'></div>
            </div>
        )
    }
    
}
export default Main;