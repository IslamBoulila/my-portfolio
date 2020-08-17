import React from 'react';
import './sideBar.css';


const SideBar = (props)=>{

    return (
        <>
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
          <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">{props.fullName}</a></h1>
              <span className="position"><a href="#">Junior software engineer</a></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#" data-nav-section="introduction">Introduction</a></li>
                  <li><a href="#" data-nav-section="about">About Me</a></li>
                  <li><a href="#" data-nav-section="experiences">Experiences</a></li>
                  <li><a href="#" data-nav-section="skills">My Soft Skills</a></li>
               
                  <li><a href="#" data-nav-section="timeline">TimeLine</a></li>
             
                </ul>
              </div>
            </nav>
            <div className="colorlib-footer">
              <div>Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-coffee" aria-hidden="true" /></div>
               <p><i className="icon-mail" ></i> islamboulila@gmail.com</p>
                <p><small>Thank you  <a href="https://colorlib.com" target="_blank">Colorlib</a> for inspiration </small> </p>
            
              <ul>
                <li><a href="https://www.linkedin.com/in/islam-boulila/" target="_blank"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/IslamBoulila/"target="_blank"><i className="icon-github" /></a></li>
                <li><a href="#" target="_blank"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/islam_boulila/" target="_blank"><i className="icon-instagram" /></a></li>
               
              </ul>
            </div>
          </aside>
       </>
      );
}

export default SideBar;
     
  