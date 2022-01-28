import React from "react";

export default function Meme(){
    return(
        <div className="meme--container">
            <div className="meme--input--container">
                <input className="meme--topText"></input>
                <input className="meme--bottomText"></input>
            </div>
            <div className="meme--button--container">
                <button className="meme--button">Get a new meme image  🖼 </button>
            </div>
        </div>
    )
}