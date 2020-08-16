import React from 'react';
import Slider from './Slider/Slider';
import './Main.css';
import About from './AboutMe/About';
import HardSkills from './MyServices/HardSkills';
import TimeLine from './TimeLine/TimeLine';


const Main=(props )=>{
return(
<div id="colorlib-main"  >
    <Slider  imgUrl={props.sliderImg}/>
    <About/>
    <HardSkills/>
    <TimeLine/>
    
    
</div>

);

}

export default Main;