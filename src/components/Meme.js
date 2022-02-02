import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const theMemes = allMemeImages.data.memes
    const rand = Math.floor(Math.random() * theMemes.length);
    const url = theMemes[rand].url
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  return (
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
        <button onClick={getMemeImage} className="meme--button">
          Get a new meme image 🖼{" "}
        </button>
      </div>
      <img alt="meme" className="meme-img" src={meme.randomImage} />
    </div>
  );
}
