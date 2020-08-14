import React from 'react';
import './Slider.css';

const Slider = (props) => {
    return (

       
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
                <div className="flexslider js-fullheight">
                    <ul className="slides">
                        <li style={{ backgroundImage: 'url('+props.imgUrl+')' }}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner js-fullheight">
                                            <div className="desc">
                                                <h1>Hi!<br />I'm Islam</h1>
                                               
                                                <p><a className="btn btn-primary btn-learn"  href="https://www.linkedin.com/in/islam-boulila/" target="_blank">Download CV <i className="icon-download4" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{ backgroundImage: 'url('+props.imgUrl+')' }}>
                            
                        <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner js-fullheight">
                                            <div className="desc">
                                                <h1>I am a software engineer</h1>
                                               
                                                <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1DtlyNYiX3fJW6F3zxgeDNZI1oSw3ScQm/view?usp=sharing" target="_blank">Download CV <i className="icon-download4" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </section>
        

    );

}
export default Slider;

