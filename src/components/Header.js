import React from "react";

export default function Header(props) {
    
    return(
        <div className="header--container">
            <div className="header--logo">
            <img className="header--img" alt={props.alt} src={props.src} />
            <h1 className="header--title">{props.headerTitle}</h1>
            </div>
            <h3 className="header--course">{props.course}</h3>
        </div>
    )

}