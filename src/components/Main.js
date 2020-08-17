import React from 'react';
import Slider from './Slider/Slider';
import './Main.css';
import About from './AboutMe/About';
import HardSkills from './MyServices/HardSkills';
import SoftSkills from './SoftSkills/SoftSkills';
import TimeLine from './TimeLine/TimeLine';


const Main=(props )=>{
return(
<div id="colorlib-main"  >
    <Slider image1="images/slider-img.jpg" image2="images/slider-img.jpg"/>
    <About/>
    <HardSkills/>
    <SoftSkills/>
    <TimeLine/>
    
    
</div>

);

}

export default Main;