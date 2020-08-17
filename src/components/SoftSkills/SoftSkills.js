import  React from 'react';
import  SkillProgress from './SkillProgress/SkillProgress';

const SoftSkills=(props)=>{
return(
    <section className="colorlib-skills" data-section="skills">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Soft Skills</span>
							<h2 className="colorlib-heading animate-box">Why choose me? </h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<p>Because soft skills matters too !!</p>
						</div>
                        <SkillProgress
                           skillName="Communication"
                           skillProgress="90%"
                           color="color-1"
                           />
                            <SkillProgress
                           skillName="Time Management"
                           skillProgress="90%"
                           color="color-2"
                           />
                            <SkillProgress
                           skillName="Curiosity"
                           skillProgress="80%"
                           color="color-3"
                           />
                           <SkillProgress
                           skillName="Self Motivation"
                           skillProgress="80%"
                           color="color-4"
                           />
                            
                           <SkillProgress
                           skillName="Responsibility"
                           skillProgress="85%"
                           color="color-6"
                           />
                           <SkillProgress
                           skillName="Creativity"
                           skillProgress="75%"
                           color="color-5"
                           />
						
					</div>
				</div>
			</section>
);

}

export default SoftSkills;