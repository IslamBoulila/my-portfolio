import React from 'react';
import './TimeLine.css';
import TimeLineRow from './TimeLineRow/TimeLineRow';


const TimeLine = () => {
  return (
    <section className="colorlib-experience" data-section="timeline">
    <div className="colorlib-narrow-content">
    <div class="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
             <span className="heading-meta">HIGHLIGHTS</span>
             <h2 className="colorlib-heading animate-box">TIMELINE</h2>
         </div>
        </div>
      <section id="cd-timeline" className="cd-container">
       
      <TimeLineRow key="1"
          title="Another software developer came into this world &#129323;"
          startDate="Apr 1997" >
           
        </TimeLineRow>

        <TimeLineRow key="2"
          title="Bachelor's degree"
          missionOrPlace="Qadi Ibnou Alarabi High School"
          startDate="Jun 2015"
          skills={["Physics","Chemistry","Science"]}
          type="studies" >

           I got my bachelor's degree in physical and chemical sciences with  high honours.
        </TimeLineRow>

        <TimeLineRow key="3"
          title="Science and technology sector for engineering"
          missionOrPlace=" National school of Applied Sciences"
          startDate="Sep 2015"
          periodOrFullDates="September 2015 - June 2017"
         
          type="studies" >
            I studied for 2 years the fundamental bases of different sciences at <a href="http://ensao.ump.ma/" target="_blank">ENSAO</a> to be prepared  for the engineering career.
         </TimeLineRow>

         <TimeLineRow key="4"
          title="National school of Applied Sciences" 
          missionOrPlace="Software engineering student"
          startDate="Sep 2017"
          periodOrFullDates="September 2017 - June 2018"
          skills={["Algorithms","Data structures","OOP","Java","Web development"]}
          type="IT" >
           First year as an IT student.Yaaay!!
        </TimeLineRow>

         <TimeLineRow key="5"
          title="FCPO"
          missionOrPlace="Full Stack Developer Intern"
          startDate="Jul 2018"
          periodOrFullDates="July 2018- August 2018"
          skills={["PHP","HTML5","CSS3","JavaScript","jQuery"]}
         
          type="internship" >
            My mission at <a href="https://www.fcpo.ma/" target="_blank">FCPO </a>agency was to create and develop the basic functionalities of an online newspaper.
        </TimeLineRow>
        <TimeLineRow key="6"
          title="Novelis"
          missionOrPlace=" Back-End Developer Intern"
          startDate="Aug 2018"
          periodOrFullDates="   August 2018- September 2018"
          skills={["Wordpress","HTML5","CSS3","JavaScript"]}
          type="internship" >
           I participated in the development of a multilingual website for <a href="https://novelis.io/" target="_blank">NOVELIS</a> company itself, based on a CMS.
        </TimeLineRow>
        
        <TimeLineRow key="7"
          title="National school of Applied Sciences"
          missionOrPlace=" Software engineering student"
          startDate="Sep 2018"
          periodOrFullDates="September 2018 - June 2019"
          skills={["Agility","JEE","Linux","Project management"]}
          type="IT" >
           My 2nd year as a software engineering student.
            </TimeLineRow>

            <TimeLineRow key="8"
          title="Neoxia Maroc"
          missionOrPlace="Backend-End Developer Intern"
          startDate="Jul 2019"
          periodOrFullDates="July 8 - August 30, 2019"
          skills={["October CMS","Laravel","MySql","Trello"]}
          type="internship" >
           As an intern at 
           <a href="https://neoxia.com/" target="_blank"> Neoxia</a> i was assigned to implement a multi-site configuration solution on October CMS, based on Laravel Framework.
            </TimeLineRow>

            <TimeLineRow key="9"
          title="SQLI Maroc"
          missionOrPlace="SAP Hybris Developer Intern"
          startDate="Feb 2020"
          periodOrFullDates="Febrary 2020 - July 2020"
          skills={["Spring","E-Commerce","Scrum","Jira","SAP Hybris Commerce"]}
          type="internship" >
            As a trainee in a big company like <a href="https://www.sqli.com/Accueil/Groupe/Agences/SQLI-Maroc" target="_blank">SQLI Maroc</a>, I participated for 6 months as an SAP Hybris developer in the creation of an E-Commerce platform to meet the needs of one of  their valued clients.
        </TimeLineRow>

        <TimeLineRow key="10"
          title="I graduated ! &#129395;"
          missionOrPlace="State Engineer in Software Engineering"
          startDate="Jul 2020"
          periodOrFullDates=" July 18, 2020"
          type="graduation" >
            Finally graduated !! (Can I go back to bed now &#128540; ?) <br/>
           After 5 years of hard work and challenges,
            I was officially announced on July 18, 2020 a State Engineer in computer sciences from the National School of Applied Sciences (ENSAO) in Oujda/Morocco.
         <br/> And now I am excited for a new chapter in my career.
        </TimeLineRow>
   
    
    

      </section> {/* cd-timeline */}
      
    </div>
    </section>

  );

}

export default TimeLine;
