import React from 'react';
import './Slider.css';
import Slide from './Slide';

const Slider = (props) => {
    return (

       
            <section id="colorlib-hero" className="js-fullheight" data-section="introduction" >
            
                <div className="flexslider js-fullheight" >
                    <ul className="slides">
                        
                        <Slide
                            imgUrl={props.image1}
                           
                            link="https://drive.google.com/file/d/1DtlyNYiX3fJW6F3zxgeDNZI1oSw3ScQm/view?usp=sharing" 
                            buttonLabel="Download CV" >
                                &lt;Hello world! &#47;&gt;<br/>I'm Islam
                        </Slide>
                        <Slide
                            imgUrl={props.image2}
                           
                            link="https://drive.google.com/file/d/1DtlyNYiX3fJW6F3zxgeDNZI1oSw3ScQm/view?usp=sharing" 
                            buttonLabel="Download CV" >
                               I am a software engineer
                        </Slide>
                      
                    </ul>
                </div>
            </section>
        

    );

}
export default Slider;

