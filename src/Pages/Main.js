import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../Component/nav';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

let count = 0;
function Main(){
    const location = useLocation();
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