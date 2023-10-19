import React, { useState } from "react";
import "./App.css";

function App() {
  const [character, setCharacter] = useState({
    name: "",
    image: "./images.png", // Replace with your image path
  });

  const generateCharacter = () => {
    const randomNumber = Math.floor(Math.random() * 88);
    fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharacter({
          name: data.name,
          image: data.image,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="App">
      <button onClick={generateCharacter}>Generate Character</button>
      <h1 className="name">{character.name}</h1>
      <img src={character.image} alt="" className="img" />
    </div>
  );
}

export default App;
