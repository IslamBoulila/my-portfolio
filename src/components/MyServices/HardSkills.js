import React from 'react';
import './HardSkills.css';

const HardSkills = () => {
    return (
        <section className="colorlib-services" data-section="experiences">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">What I do?</span>
                        <h2 className="colorlib-heading">Here are some of my expertise</h2>
                    </div>
                </div>
                <div className="row row-pt-md">
                  
                    <div className="col-md-6 text-center animate-box">
                        <div className="services color-2">
                            <span className="icon">
                                <i className="icon-data" />
                            </span>
                            <div className="desc">
                                <h3>Full-Stack Developer</h3>
                                <p>It's true that I'm passionate by Java and ReactJs, but I also have worked before on some projects with PHP, JavaScript, HTML, CSS.</p>
                                {/*<p>The main area of my humble expertise and my big passion is backend development with Java EE.</p>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center animate-box">
                        <div className="services color-1">
                            <span className="icon">
                                <i className="icon-shopping-cart" />
                            </span>
                            <div className="desc">
                                <h3>SAP Hybris developer</h3>
                                <p>I pursued my recent internship with SAP Hybris team of SQLI-Oujda agency. I gained some skills and knowledge in the main areas of SAP Hybris Commerce Development and worked with, tools like Jenkins, Solr, Jira..</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center animate-box">
                        <div className="services color-4">
                            <span className="icon">
                                <i className="icon-bulb" />
                            </span>
                            <div className="desc">
                                <h3>Software engineering</h3>
                                <p>As coming from the engineering background, I have good grasp over principles of Software Engineering and Agility.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center animate-box">
                        <div className="services color-3">
                            <span className="icon">
                                <i className="icon-phone3" />
                            </span>
                            <div className="desc">
                                <h3>CMS Web Developer</h3>
                                <p>I have experience building and customizing  websites using different CMS like October CMS and Wordpress.</p>
                            </div>
                        </div>
                    </div>
                   
                   
                   
                   
                </div>
            </div>
        </section>

    );



}

export default HardSkills;