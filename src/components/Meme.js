import React, { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([])


  function handleInput(event){
    const {name, value} = event.target
    setMeme(prev => {
      return{
        ...prev,
        [name]: value
      }
    })
  }

  useEffect(() => {
    const url = 'https://api.imgflip.com/get_memes'
    fetch(url)
      .then(response => response.json())
      .then(data => setAllMemeImages(data.data.memes))
  }, [])

  function getMemeImage() {
    const theMemes = allMemeImages
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
          onChange={handleInput}
          name="topText"
          value={meme.topText}
        ></input>
        <input
          className="meme--bottomText"
          type="text"
          placeholder="Bottom Text"
          onChange={handleInput}
          name="bottomText"
          value={meme.bottomText}
        ></input>
      </div>
      <div className="meme--button--container">
        <button onClick={getMemeImage} className="meme--button">
          Get a new meme image 🖼{" "}
        </button>
      </div>
      <div className="meme">
                <img alt='the-meme' src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </div>
  );
}
