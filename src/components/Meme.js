import React from "react";
import memesData from "../memesData";

export default function Meme(){

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const data = Math.floor(Math.random() * memesArray.length)
        return console.log(memesArray[data].url)
    }

    return(
        <div className="meme--container">
            <div className="meme--input--container">
                <input 
                className="meme--topText"
                type="text"
                placeholder="Top Text"
                ></input>
                <input 
                className="meme--bottomText"
                type="text"
                placeholder="Bottom Text"
                ></input>
            </div>
            <div className="meme--button--container">
                <button onClick={getMemeImage} className="meme--button">Get a new meme image  🖼 </button>
            </div>
        </div>
    )
}