import React from 'react';
import './SkillProgress.css';



const SkillProgress = (props) => {
    let colorClass =`progress-bar ${props.color}`;
    const progress=props.skillProgress;
    const progressWithoutPercent=progress.substring(0,progress.length);
    return (
        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
            <div className="progress-wrap">
                <h3>{props.skillName}</h3>
                <div className="progress">
                    <div className={colorClass} role="progressbar" aria-valuenow={progressWithoutPercent}
                        aria-valuemin="0" aria-valuemax="100"style={{width: props.skillProgress}}>
                        <span>{props.skillProgress}</span>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default SkillProgress;