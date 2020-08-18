import React from 'react';

const Slide = (props) => {
let icon=null;
switch (props.icon){
    case "download":
        icon="icon-download4";
        break;
    case "instagram":
        icon="icon-instagram";
        break;
}
    return (
        <li style={{ backgroundImage: 'url(' + props.imgUrl + ')' }}>
           
            <div className="overlay" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner js-fullheight">
                            <div className="desc">
                                <h1>{props.children}</h1>

                                <p><a className="btn btn-primary btn-learn" href={props.link} target="_blank">{props.buttonLabel} <i className={icon} /></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>)
}

export default Slide;