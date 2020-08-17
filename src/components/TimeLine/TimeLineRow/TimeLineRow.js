import React from 'react';


const TimeLineRow = (props) => {
    let skills = null;
    if (props.skills) {
        skills = props.skills.map(skill => (<li>{skill}</li>));
    }
    let icon=null;
     switch(props.type){
            case "studies" :
                 icon="icon-book2";
                break;
            case "IT":
                icon="icon-device-desktop";
                break;
            case "internship":
                icon ="icon-code-outline";
                break;
            case "graduation":
                icon="icon-study";
                break;
            case "job":
                icon="icon-briefcase";
                break;


     }
    return (
        <div className="cd-timeline-block">
            <div className="cd-timeline-img ">
            </div>
            <div className="cd-timeline-content">
                <h2>{props.title}</h2>
               { (props.missionOrPlace ||props.periodOrFullDates)  && <div className="timeline-content-info">
                  {props.missionOrPlace &&  <span className="timeline-content-info-title">
                        <i className={icon} aria-hidden="true" />
                        {props.missionOrPlace}
                    </span> } 
                   {props.periodOrFullDates &&  <span className="timeline-content-info-date" >
                        <i className="icon-calendar3" aria-hidden="true" />
                        {props.periodOrFullDates}
                    </span> }
                </div>
                }
                <p>{props.children}</p>
              {skills &&   <ul className="content-skills">
                    {skills}
                </ul> }		<span className="cd-date">{props.startDate}</span>
            </div>
        </div>
    );
}

export default TimeLineRow;