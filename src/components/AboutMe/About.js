import React from 'react';

import './About.css';
const About = () => {

    return (
        <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <span className="heading-meta">About Me</span>
                                    <h2 className="colorlib-heading">Who Am I?</h2>
                                    <p><strong>Hello &#128516; ! I'm Islam Boulila.</strong> I'm a recent graduate of the <strong>National School of Applied Sciences</strong> in Morocco as a State Engineer in Software Engineering.</p>

<p>I was recently an intern at the <strong>SQLI group</strong> in Morocco for 6 months. During this period, i participated within an agile team in the creation of an E-commerce platform  based on the SAP Hybris Commerce solution.</p>
<p>I am passionate about web development in Java EE and ReactJs.
I'm always eager and exited to learn and discover new technologies, and when i do i love dig into how things work and the reasons behind &#129488;.</p>
<p>People who know me or worked with me before know how i'm obssesed with organazing and planing my schedule. Yeah, you guessed it &#128540; ! I'm that type of person who writes down his TO DO List  before starting his day and being productive.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div className="hire">
                                    <h2>I am seeking now  for exciting opportunities as a full-stack  developer.<br/>And i would love to connect with you !</h2>
                                    <a href="https://www.linkedin.com/in/islam-boulila/" target="_blank" className="btn-hire">Hire me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default About;
